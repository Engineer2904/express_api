const express = require("express");
const products=require("./data")
const app = express();
port = 9000;



app.get("/products", function (req, res) {
  res.send(products);
});
app.get("/products/:id", function (req, res) {
    const found=products.find(Element=>Element.id==req.params.id)
    // const result=found.total_quantity
  res.send(found);
});
app.get("/products/name/:name", function (req, res) {
    const found=products.find(Element=>Element.name==req.params.name)
  res.send(found);
});


app.listen(port, () => {
  console.log("Server is running on ", port);
});

app.use(express.json()) //to convert the code to json



app.post("/addproducts", (req, res) => {

   
  
    console.log(req.body);
   
    res.json({message:"Your request is sucessfull!"})
})
