document.addEventListener("DOMContentLoaded", function() {
  // General Body Styles
  document.body.style.fontFamily = "Arial, sans-serif";
  document.body.style.margin = "0";
  document.body.style.padding = "0";
  document.body.style.background = "linear-gradient(135deg, #ace9f3, #f3e8ac, #f4c2f3)";
  document.body.style.backgroundSize = "400% 400%";
  document.body.style.animation = "gradientShift 15s ease infinite";

  const style = document.createElement("style");
  style.textContent = `
      @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
      }

      header {
          background: linear-gradient(90deg, #89c7d4, #a2d8ce, #77b9d4);
          color: #ffffff;
          padding: 15px 0;
          text-align: center;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      }
      header h1 {
          margin: 0;
          font-size: 2rem;
          font-weight: bold;
      }
      nav ul {
          list-style: none;
          padding: 0;
          margin: 10px 0 0;
          display: flex;
          justify-content: center;
          gap: 20px;
      }
      nav ul li a {
          text-decoration: none;
          font-weight: bold;
          font-size: 1rem;
          color: #ffffff;
          padding: 10px 15px;
          border-radius: 5px;
          transition: background 0.3s, color 0.3s;
          background: linear-gradient(90deg, #6ec1e4, #78d3e9, #5fb6da);
      }
      nav ul li a:hover {
          background: linear-gradient(90deg, #f9d423, #ff4e50);
          color: #ffffff;
      }
      .eventContainer {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 20px;
          margin: 20px auto;
          max-width: 1200px;
      }
      .eventCards {
          width: 300px;
          background: linear-gradient(145deg, #fdfdfd, #f3f4f7);
          border-radius: 1rem;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
          overflow: hidden;
          transition: transform 0.3s, box-shadow 0.3s;
      }
      .eventCards:hover {
          transform: translateY(-5px);
          box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.3);
          background: linear-gradient(145deg, #f3f4f7, #fdfdfd);
      }
      .eventCard-image img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-bottom: 1px solid #ddd;
      }
      .eventCard-body {
          text-align: center;
          padding: 15px;
          color: #333;
      }
      .eventCard-body h3 {
          font-size: 1.2rem;
          margin: 10px 0;
          color: #4b0082;
      }
      .eventCard-body h4 {
          margin: 5px 0;
          font-size: 1rem;
          color: #8b4513;
      }
      .eventCard-body button {
          background-color: #87ceeb;
          color: white;
          border: none;
          padding: 10px 15px;
          border-radius: 5px;
          cursor: pointer;
          font-size: 1rem;
          font-weight: bold;
          transition: background-color 0.3s, transform 0.3s;
      }
      .eventCard-body button a {
          text-decoration: none;
          color: white;
      }
      .eventCard-body button:hover {
          background-color: #4682b4;
          transform: scale(1.05);
      }
  `;
  document.head.appendChild(style);

  // Header and Navigation
  const header = document.createElement("header");
  const h1 = document.createElement("h1");
  h1.textContent = "Iconic Mobiles";
  header.appendChild(h1);
  document.body.appendChild(header);

  const nav = document.createElement("nav");
  const ul = document.createElement("ul");

  const homeLi = document.createElement("li");
  const homeLink = document.createElement("a");
  homeLink.href = "/Index.html";
  homeLink.textContent = "Home";
  homeLi.appendChild(homeLink);
  ul.appendChild(homeLi);

  const productsLi = document.createElement("li");
  const productsLink = document.createElement("a");
  productsLink.href = "/Products.html";
  productsLink.textContent = "Products";
  productsLi.appendChild(productsLink);
  ul.appendChild(productsLi);

  const contactLi = document.createElement("li");
  const contactLink = document.createElement("a");
  contactLink.href = "/Contact.html";
  contactLink.textContent = "Contact";
  contactLi.appendChild(contactLink);
  ul.appendChild(contactLi);

  const crudLi = document.createElement("li");
  const crudLink = document.createElement("a");
  crudLink.href = "/CRUD.html";
  crudLink.textContent = "CRUD";
  crudLi.appendChild(crudLink);
  ul.appendChild(crudLi);

  nav.appendChild(ul);
  header.appendChild(nav);

  // Event Container and Cards
  const eventContainer = document.createElement("div");
  eventContainer.classList.add("eventContainer");

  const mobileDetails = [
      {
          name: "Redmi Note 10s",
          price: "Rs.16,999",
          img: "https://d2xamzlzrdbdbn.cloudfront.net/products/67d54c6b-5771-4694-b7bb-3d9cdfd85ca9.jpg",
          link: "/Buynow.html"
      },
      {
          name: "Realme 11 Pro",
          price: "Rs.17,999",
          img: "https://m.media-amazon.com/images/I/71HZ0tigFFL._AC_SS300_.jpg",
          link: "/Buynow.html"
      },
      {
          name: "One Plus",
          price: "Rs.24,000",
          img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1691050131/Croma%20Assets/Communication/Mobiles/Images/275684_weks9p.png?",
          link: "/Buynow.html"
      },
      {
          name: "Samsung",
          price: "Rs.10,999",
          img: "https://m.media-amazon.com/images/I/81qbcjMUVsL._AC_UF894,1000_QL80_.jpg",
          link: "/Buynow.html"
      },
      {
          name: "Motorola",
          price: "Rs.6,500",
          img: "https://5.imimg.com/data5/SELLER/Default/2021/9/WI/ZP/XB/58263536/motorola-smart-phone.jpg",
          link: "/Buynow.html"
      }
  ];

  mobileDetails.forEach(mobile => {
      const eventCard = document.createElement("div");
      eventCard.classList.add("eventCards");

      const eventCardImage = document.createElement("div");
      eventCardImage.classList.add("eventCard-image");
      const img = document.createElement("img");
      img.src = mobile.img;
      img.alt = mobile.name;
      eventCardImage.appendChild(img);
      eventCard.appendChild(eventCardImage);

      const eventCardBody = document.createElement("div");
      eventCardBody.classList.add("eventCard-body");
      const h3 = document.createElement("h3");
      h3.textContent = mobile.name;
      eventCardBody.appendChild(h3);
      const h4 = document.createElement("h4");
      h4.textContent = mobile.price;
      eventCardBody.appendChild(h4);

      const button = document.createElement("button");
      const buttonLink = document.createElement("a");
      buttonLink.href = mobile.link;
      buttonLink.textContent = "Buy Now";
      button.appendChild(buttonLink);
      eventCardBody.appendChild(button);

      eventCard.appendChild(eventCardBody);
      eventContainer.appendChild(eventCard);
  });

  document.body.appendChild(eventContainer);
});
