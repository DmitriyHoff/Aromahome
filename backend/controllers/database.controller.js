import exprepress, { json, request, response } from "express";
import Database from "../database.js";
import slugify from "slugify";

const database = new Database();
database.connect();

const router = exprepress.Router();
router.use(exprepress.json());

// параметры для slugify
const slugParams = {
  locale: "ru",
  lower: true,
  strict: true,
};

function getRequestHostUrl(request) {
  return `${request.protocol}://${request.get("host")}/`;
}

async function sendResponse(response, callback) {
  try {
    const data = await callback();

    // если в ответе есть ошибка, меняем статус
    if (data?.error) response.statusCode = 400;

    response.json(data);
  } catch (error) {
    console.log(error);
  }
}

/* Получение списка категорий */
router.route("/categories").get((request, response) => {
  sendResponse(response, () => {
    return database.getCategories();
  });
});

/* Получение списка производителей */
router.route("/brands").get((request, response) => {
  sendResponse(response, () => {
    return database.getBrands();
  });
});

/* Получение списка товаров */
router.route("/products").get((request, response) => {
  const hostname = getRequestHostUrl(request);
  const { limit, page } = request.query;
  sendResponse(response, () => {
    return database.getProducts(hostname, { limit, page });
  });
});

/* Получение товара по id */
router.route("/product/:id").get((request, response) => {
  const hostname = getRequestHostUrl(request);
  const productId = request.params.id;
  console.log("id: ", productId);
  sendResponse(response, () => {
    return database.getProductById(productId, hostname);
  });
});

/* Создание категории */
router.route("/category").post((request, response) => {
  const { title, image } = request.body;

  sendResponse(response, () => {
    return database.addCategory(title, slugify(title, slugParams), image);
  });
});

/* Создание продукта */
router.route("/product").post((request, response) => {
  const { title, image, description, price } = request.body;

  sendResponse(response, () => {
    return database.addProduct(
      title,
      slugify(title, slugParams),
      image,
      description,
      price
    );
  });
});

/* Создание пользователя */
router.route("/users/accessKey").get(async (request, response) => {
  sendResponse(response, () => {
    return database.addUser();
  });
});

/* Получение корзины */
router.route("/baskets").get(async (request, response) => {
  const hostname = getRequestHostUrl(request);
  const { accessKey } = request.query;
  if (!accessKey) {
    sendResponse(response, () => {
      return { error: "accessKey required" };
    });
  } else {
    // check accessKey...
  }
  sendResponse(response, () => {
    return database.getCart({ accessKey, hostname });
  });
});

/* Добавление в корзину */
router.route("/baskets").post((request, response) => {
  sendResponse(response, async () => {
    const { cartId, productId, quantity } = request.body;
    const { accessKey } = request.query;
    const hostname = getRequestHostUrl(request);

    await database.addProductToCart({ cartId, productId, quantity });
    return await database.getCart({ accessKey, hostname });
  });
});

/* Изменение количества товара в корзине */
router.route("/baskets").put((request, response) => {
  const { cartId, productId, quantity } = request.body;
  if (!cartId)
    sendResponse(response, () => {
      return { error: "cartId undefined" };
    });
  else if (!productId)
    sendResponse(response, () => {
      return { error: "productId undefined" };
    });
  else if (!quantity)
    sendResponse(response, () => {
      return { error: "quantity undefined" };
    });
  else
    sendResponse(response, () => {
      return database.setProductQuantity({ cartId, productId, quantity });
    });
});

/* Удаление товара из корзины */
router.route("/baskets").delete((request, response) => {
  const { cartId, productId } = request.body;
  if (!cartId)
    sendResponse(response, () => {
      return { error: "cartId undefined" };
    });
  else if (!productId)
    sendResponse(response, () => {
      return { error: "productId undefined" };
    });
  else
    sendResponse(response, () => {
      return database.deleteProductFromCart({ cartId, productId });
    });
});

router.route("/orders").post(async (request, response) => {
  const { name, address, phone, email, comment } = request.body;
  const { accessKey } = request.query;

  if (!accessKey) {
    sendResponse(response, () => {
      return { error: "accessKey required" };
    });
  } else {
    // check accessKey...
  }
  if (!name) {
    sendResponse(response, () => {
      return { error: "name undefined" };
    });
  }
  if (!address) {
    sendResponse(response, () => {
      return { error: "address undefined" };
    });
  }
  if (!phone) {
    sendResponse(response, () => {
      return { error: "phone undefined" };
    });
  }
  if (!email) {
    sendResponse(response, () => {
      return { error: "email undefined" };
    });
  }
  if (!comment) {
    sendResponse(response, () => {
      return { error: "comment undefined" };
    });
  }
  const hostname = getRequestHostUrl(request);
  const cart = await database.getCart({ hostname, accessKey });

  database.db.beginTransaction();
  let result = {};
  try {
    await database.makeOrder({ name, address, phone, email, comment });
    let [lastOrder] = await database.getLastInsertedOrder();

    cart.items.forEach(async (item) => {
      const product = await database.getProductById(item.id);
      await database.addOrderItem({
        orderId: lastOrder.id,
        productId: product.id,
        productTitle: product.title,
        quantity: item.quantity,
        price: product.price,
      });
    });
    await database.deleteCartById(cart.id);
    database.db.commit();
    result = lastOrder;
  } catch (error) {
    console.log(error);
    database.db.rollback();
  }
  result = { ...result, items: await database.getOrderItems(result.id) };
  sendResponse(response, () => {
    return result;
  });
});

router.route("/order/:id").get(async (request, response) => {
  const orderId = request.params.id;
  const [order] = await database.getOrderById(orderId);
  if (!order) {
    sendResponse(response, () => {
      return { error: "Order not found!" };
    });
    return;
  }

  const items = await database.getOrderItems(orderId);
  const result = { ...order, items };
  sendResponse(response, () => {
    return result;
  });
});
export default router;
