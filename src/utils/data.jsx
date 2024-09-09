const navigate = [
  { title: "Home", url: "/home" },
  {
    title: "Products",
    children: [
      {
        title: "Men",
        url: "/products/men",
      },
      {
        title: "Womenen",
        url: "/products/women",
      },
      {
        title: "Electronics",
        children: [
          {
            title: "Phones",
            url: "/products/electronics/phones",
          },
          {
            title: "Laptops",
            url: "/products/electronics/laptop",
          },
        ],
      },
    ],
  },

  {
    title: "Services",
    children: [
        {
            title: "Some Day Delivery",
            url: "/services/same-day-delivery"
        },
        {
            title: "Customized Services",
            url: "/services/customized-services"
        },
    ],
    },
  
    {
        title: 'About',
        url: '/about'
    },
    {
        title: 'Contact',
        url: '/contact'
    }
];

export default navigate;
