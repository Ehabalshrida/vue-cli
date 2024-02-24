const Students = {
  data() {
    return {
      products: [],
    };
  },
  methods: {
    fetchData() {
      fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((json) => {
          console.log({ json });
          this.products = json.products;
        });
    },
  },
  mounted() {
    this.fetchData();
  },
};
export default Students;
