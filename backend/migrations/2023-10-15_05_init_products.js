export async function up(queryInterface, { DataTypes }) {
  await queryInterface.bulkInsert("products", [
    {
      id: 1,
      category_id: 2,
      brand_id: 1,
      title: "Imola (V05-08)",
      description:
        "Ароматизатор VINOVE Imola (V05-08) - излучает сияние, свежесть и женскую энергию. Пробуждает силу зеленого чая и завораживает букетом гиацинтов. Верхние ноты : лимон, алоэ.\nНоты сердца: зеленый чай, жасмин, гиацинт.\nБазовая нота : мускус, ветивер, пачули.",
      image: "img/imola.jpg",
      price: 508.0,
    },
    {
      id: 2,
      category_id: 2,
      brand_id: 1,
      title: "Bahrain (V01-06)",
      description:
        "Ароматизатор VINOVE Bahrain (V01-06) - запах кипящий молодостью, щедростью и радостью жизни.\nВерхняя нота: мандарин, апельсин, грейпфрут, цветок апельсина и зеленый чай.\nНотa сердца: пион, магнолия, ландыш, базилик, маракуйа и дыня.\nБазовая нота: сандаловое дерево, амбра и мускус.",
      image: "img/bahrain.jpg",
      price: 508.0,
    },
    {
      id: 3,
      category_id: 2,
      brand_id: 1,
      title: "Fuji (V01-04)",
      description:
        "Ароматизатор VINOVE Fuji (V01-04) - успокаивает чувства перенося в состояние покоя и гармонии. Этот запах расслабляет. Вносит равновесие в каждый новый день.\nСочетает выразительность целебных трав, грейпфрута с силой специй и смолистым деревом. Заостряет внимание на том, что на самом деле важно.\nВерхняя нота: черный перец, элеми, грейпфрут.\nНота сердца: лаванда, герань.\nБазовая нота: пачули, ветивер, aмбра, сухой лес.",
      image: "img/fuji.jpg",
      price: 508.0,
    },
    {
      id: 4,
      category_id: 2,
      brand_id: 1,
      title: "Indianapolis (V01-03)",
      description:
        "Ароматизатор VINOVE Fuji (V01-04) - успокаивает чувства перенося в состояние покоя и гармонии. Этот запах расслабляет. Вносит равновесие в каждый новый день.\nСочетает выразительность целебных трав, грейпфрута с силой специй и смолистым деревом. Заостряет внимание на том, что на самом деле важно.\nВерхняя нота: черный перец, элеми, грейпфрут.\nНота сердца: лаванда, герань.\nБазовая нота: пачули, ветивер, aмбра, сухой лес.",
      image: "img/indianapolis.jpg",
      price: 508.0,
    },
    {
      id: 5,
      category_id: 2,
      brand_id: 1,
      title: "Maranello (V01-16)",
      description:
        "Ароматизатор VINOVE Fuji (V01-04) - успокаивает чувства перенося в состояние покоя и гармонии. Этот запах расслабляет. Вносит равновесие в каждый новый день.\nСочетает выразительность целебных трав, грейпфрута с силой специй и смолистым деревом. Заостряет внимание на том, что на самом деле важно.\nВерхняя нота: черный перец, элеми, грейпфрут.\nНота сердца: лаванда, герань.\nБазовая нота: пачули, ветивер, aмбра, сухой лес.",
      image: "img/maranello.jpg",
      price: 508.0,
    },
    {
      id: 6,
      category_id: 2,
      brand_id: 1,
      title: "Monaco (V01-05)",
      description:
        "Ароматизатор VINOVE Fuji (V01-04) - успокаивает чувства перенося в состояние покоя и гармонии. Этот запах расслабляет. Вносит равновесие в каждый новый день.\nСочетает выразительность целебных трав, грейпфрута с силой специй и смолистым деревом. Заостряет внимание на том, что на самом деле важно.\nВерхняя нота: черный перец, элеми, грейпфрут.\nНота сердца: лаванда, герань.\nБазовая нота: пачули, ветивер, aмбра, сухой лес.",
      image: "img/maranello.jpg",
      price: 508.0,
    },
    {
      id: 7,
      category_id: 2,
      brand_id: 1,
      title: "Monza (V01-07)",
      description:
        "Ароматизатор VINOVE Fuji (V01-04) - успокаивает чувства перенося в состояние покоя и гармонии. Этот запах расслабляет. Вносит равновесие в каждый новый день.\nСочетает выразительность целебных трав, грейпфрута с силой специй и смолистым деревом. Заостряет внимание на том, что на самом деле важно.\nВерхняя нота: черный перец, элеми, грейпфрут.\nНота сердца: лаванда, герань.\nБазовая нота: пачули, ветивер, aмбра, сухой лес.",
      image: "img/monza.jpg",
      price: 508.0,
    },
    {
      id: 8,
      category_id: 2,
      brand_id: 1,
      title: "Sebring (V01-02)",
      description:
        "Ароматизатор VINOVE Fuji (V01-04) - успокаивает чувства перенося в состояние покоя и гармонии. Этот запах расслабляет. Вносит равновесие в каждый новый день.\nСочетает выразительность целебных трав, грейпфрута с силой специй и смолистым деревом. Заостряет внимание на том, что на самом деле важно.\nВерхняя нота: черный перец, элеми, грейпфрут.\nНота сердца: лаванда, герань.\nБазовая нота: пачули, ветивер, aмбра, сухой лес.",
      image: "img/sebring.jpg",
      price: 508.0,
    },
    {
      id: 9,
      category_id: 2,
      brand_id: 1,
      title: "Silverstone (V01-01)",
      description:
        "Ароматизатор VINOVE Fuji (V01-04) - успокаивает чувства перенося в состояние покоя и гармонии. Этот запах расслабляет. Вносит равновесие в каждый новый день.\nСочетает выразительность целебных трав, грейпфрута с силой специй и смолистым деревом. Заостряет внимание на том, что на самом деле важно.\nВерхняя нота: черный перец, элеми, грейпфрут.\nНота сердца: лаванда, герань.\nБазовая нота: пачули, ветивер, aмбра, сухой лес.",
      image: "img/silverstone.jpg",
      price: 508.0,
    },
    {
      id: 10,
      category_id: 2,
      brand_id: 1,
      title: "Yas marina (V01-09)",
      description:
        "Ароматизатор VINOVE Fuji (V01-04) - успокаивает чувства перенося в состояние покоя и гармонии. Этот запах расслабляет. Вносит равновесие в каждый новый день.\nСочетает выразительность целебных трав, грейпфрута с силой специй и смолистым деревом. Заостряет внимание на том, что на самом деле важно.\nВерхняя нота: черный перец, элеми, грейпфрут.\nНота сердца: лаванда, герань.\nБазовая нота: пачули, ветивер, aмбра, сухой лес.",
      image: "img/yas-marina.jpg",
      price: 508.0,
    },
    {
      id: 11,
      category_id: 1,
      brand_id: 2,
      title: "Аромадиффузор QUEEN №1 500 мл",
      description:
        "Аромат №1: МАНДАРИН-ЖАСМИН-МУСКУС\nРоскошный парфюмерный артефакт для вашего интерьера. Изысканный дизайн и искрящийся цитрусовой свежестью аромат с солнечным настроением.",
      image: "img/yas-marina.jpg",
      price: 7500.0,
    },
    {
      id: 12,
      category_id: 1,
      brand_id: 2,
      title: "Аромадиффузор QUEEN №2 500 мл",
      description:
        "Аромат №2: ФЛЕРДОРАНЖ-РОЗА-САНДАЛ\nРоскошный парфюмерный артефакт для вашего интерьера. Изысканный дизайн и чувственный аромат, объединяющий мягкую сладость цветочных аккордов и благородное древесное тепло.",
      image: "img/imgonline-com-ua-Resize-o4LcMkDa2PQe.png",
      price: 7500.0,
    },
    {
      id: 13,
      category_id: 1,
      brand_id: 2,
      title: "Аромадиффузор QUEEN №3 500 мл",
      description:
        "Аромат №3: ЧАЙ МАТЧА - БЛАГОВОНИЯ - ПАЧУЛИ\nРоскошный парфюмерный артефакт для вашего интерьера. Изысканный дизайн и утонченный медитативный аромат чая, пачули и благовоний.",
      image: "img/imgonline-com-ua-Resize-3ovtWuLDXTo9VFS8.png",
      price: 7500.0,
    },
  ]);
}
export async function down(queryInterface, { DataTypes }) {
  await queryInterface.bulkDelete("products", { id: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] });
}
