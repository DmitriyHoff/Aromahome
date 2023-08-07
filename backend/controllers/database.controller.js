import exprepress, { request, response } from "express";
import Database from "../database.js";
import slugify from "slugify";

const database = new Database();
database.connect();

const router = exprepress.Router();
router.use(exprepress.json());
router.get("/", (req, res) => {
  res.send("api...");
});

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

  sendResponse(response, () => {
    return database.getProducts(hostname);
  });
});

/* Получение товара по id */
router.route("/product").get((request, response) => {
  const hostname = getRequestHostUrl(request);
  const productId = request.query.id;

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
  sendResponse(response, () => {
    const { accessKey } = request.query;
    return database.getCart(accessKey);
  });
});
export default router;
