let peopleData = {
  results: [
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Primitivo",
        last: "Barbosa",
      },
      location: {
        street: {
          number: 2374,
          name: "Rua Sete de Setembro ",
        },
        city: "Mogi das Cruzes",
        state: "Distrito Federal",
        country: "Brazil",
        postcode: 16226,
        coordinates: {
          latitude: "-71.3015",
          longitude: "-49.0877",
        },
        timezone: {
          offset: "-6:00",
          description: "Central Time (US & Canada), Mexico City",
        },
      },
      email: "primitivo.barbosa@example.com",
      login: {
        uuid: "c133b831-3d4d-46ad-93ed-69227fef48b1",
        username: "whitesnake473",
        password: "celica",
        salt: "l2tYBMZe",
        md5: "e676a9b04a54fad7d1a8f5e87b5b3327",
        sha1: "d6096663a2f4f40f378c5acf1665c452db35a16c",
        sha256:
          "8e07139a400d21039a140e11a4d84ac00b814174e2c33db5c1b926167f295ded",
      },
      dob: {
        date: "1978-03-11T13:45:21.038Z",
        age: 44,
      },
      registered: {
        date: "2005-04-27T14:21:02.540Z",
        age: 17,
      },
      phone: "(49) 8925-7027",
      cell: "(15) 0092-8161",
      id: {
        name: "",
        value: null,
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/13.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/13.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/13.jpg",
      },
      nat: "BR",
    },
  ],
  info: {
    seed: "8321d74b39ac202b",
    results: 1,
    page: 1,
    version: "1.3",
  },
};

console.log(
  Object.entries(peopleData.results).forEach((k, v) => console.log(k))
);
