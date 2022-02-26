"use strict"
// createdAt: new Date(),
// updatedAt: new Date(),
module.exports = {
  up: async (queryInterface, Sequelize) =>
    await queryInterface.bulkInsert(
      "products",
      [
        {
          title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
          image: "nutech-file/81fPKd-2AYL._AC_SL1500__elztdo",
          stock: 72,
          buyPrice: 1539300,
          sellPrice: 1319400,
          description:
            "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        },
        {
          title: "Mens Casual Premium Slim Fit T-Shirts ",
          image: "nutech-file/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY__tm17od",
          stock: 103,
          buyPrice: 312200,
          sellPrice: 267600,
          description:
            "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with  round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        },
        {
          title: "Mens Cotton Jacket",
          image: "nutech-file/71li-ujtlUL._AC_UX679__wsiyyn",
          stock: 38,
          buyPrice: 783860,
          sellPrice: 671880,
          description:
            "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions,  such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        },
        {
          title: "Mens Casual Slim Fit",
          image: "nutech-file/71YXzeOuslL._AC_UY879__yhnr0j",
          stock: 11,
          buyPrice: 223860,
          sellPrice: 191880,
          description:
            "The color could be slightly different between on the screen and in practice. /  Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
        },
        {
          title:
            "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
          image: "nutech-file/71pWzhdJNwL._AC_UL640_QL65_ML3__hfbkxe",
          stock: 44,
          buyPrice: 9730000,
          sellPrice: 8340000,
          description:
            "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
        },
        {
          title: "Solid Gold Petite Micropave ",
          image: "nutech-file/61sbMiUnoGL._AC_UL640_QL65_ML3__za9pgs",
          stock: 100,
          buyPrice: 2352000,
          sellPrice: 2016000,
          description:
            "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
        },
        {
          title: "White Gold Plated Princess",
          image: "nutech-file/71YAIFU48IL._AC_UL640_QL65_ML3__yh68wf",
          stock: 53,
          buyPrice: 139860,
          sellPrice: 119880,
          description:
            "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
        },
        {
          title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
          image: "nutech-file/51UDEzMJVpL._AC_UL640_QL65_ML3__vabqjs",
          stock: 79,
          buyPrice: 153860,
          sellPrice: 131880,
          description:
            "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
        },
        {
          title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
          image: "nutech-file/61IBBVJvSDL._AC_SY879__uurtyc",
          stock: 75,
          buyPrice: 896000,
          sellPrice: 768000,
          description:
            "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
        },
        {
          title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
          image: "nutech-file/61U7T1koQqL._AC_SX679__b3efwi",
          stock: 54,
          buyPrice: 1526000,
          sellPrice: 1308000,
          description:
            "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host  device, OS and application.)",
        },
        {
          title:
            "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
          image: "nutech-file/71kWymZ_c_L._AC_SX679__huri5a",
          stock: 86,
          buyPrice: 1526000,
          sellPrice: 1308000,
          description:
            "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Ero  r Checking & Correction) to provide the optimized performance and enhanced reliability.",
        },
        {
          title:
            "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
          image: "nutech-file/61mtL65D4cL._AC_SX679__s45soo",
          stock: 35,
          buyPrice: 1596000,
          sellPrice: 1368000,
          description:
            "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
        },
        {
          title:
            "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
          image: "nutech-file/81QpkIctqPL._AC_SX679__yd3qmv",
          stock: 25,
          buyPrice: 8386000,
          sellPrice: 7188000,
          description:
            "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync  technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178  degree. Vertical viewing angle-178 degree 75 hertz",
        },
        {
          title:
            "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide  Screen QLED ",
          image: "nutech-file/81Zt42ioCgL._AC_SX679__gc5fkf",
          stock: 89,
          buyPrice: 13999860,
          sellPrice: 11999880,
          description:
            "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningl   realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
        },
        {
          title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
          image: "nutech-file/51Y5NI-I5jL._AC_UX679__wsplon",
          stock: 62,
          buyPrice: 797860,
          sellPrice: 683880,
          description:
            "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
        },
        {
          title:
            "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
          image: "nutech-file/81XH0e8fefL._AC_UY879__butfve",
          stock: 94,
          buyPrice: 419300,
          sellPrice: 359400,
          description:
            "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
        },
        {
          title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
          image: "nutech-file/71HblAHs5xL._AC_UY879_-2_mlpvvf",
          stock: 67,
          buyPrice: 559860,
          sellPrice: 479880,
          description:
            "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The  Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and  the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
        },
        {
          title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
          image: "nutech-file/71z3kpMAYsL._AC_UY879__hun2yu",
          stock: 101,
          buyPrice: 137900,
          sellPrice: 118200,
          description:
            "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
        },
        {
          title: "Opna Women's Short Sleeve Moisture",
          image: "nutech-file/51eg55uWmdL._AC_UX679__s4uhqo",
          stock: 49,
          buyPrice: 111300,
          sellPrice: 95400,
          description:
            "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
        },
        {
          title: "DANVOUY Womens T Shirt Casual Cotton Short",
          image: "nutech-file/61pHAEJ4NML._AC_UX679__q2dsqi",
          stock: 5,
          buyPrice: 181860,
          sellPrice: 155880,
          description:
            "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
        },
      ],
      {}
    ),

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("products", null, {})
  },
}
