const data = {
  name: "A1",
  children: [
    {
      name: "B1",
      children: [
        {
          name: "C1",
          value: 100,
        },
        {
          name: "C2",
          value: 300,
        },
        {
          name: "C3",
          value: 200,
        },
      ],
    },
    {
      name: "B2",
      value: 200,
    },
  ],
};

const container = {
    container: '.container'
}

packedCircles(data, container)
