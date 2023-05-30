import clientPromise from "@/lib/mongodb";
import { Product, Products } from "@/typescript/interfaces/entities";

export const getAllProducts = async () => {
  try {
    const client = await clientPromise;
    const db = client.db("Used_Cars");
    const allProducts: Products = (await db.collection("products").find({}).toArray()).sort((a, b) => a.id - b.id);
    const length = allProducts.length;
    return { allProducts, length };
  } catch (error) {
    console.log(error.message);
  }
};
export const deleteAllProducts = async () => {
  try {
    const client = await clientPromise;
    const db = client.db("Used_Cars");
    db.collection("products").deleteMany({});
  } catch (error) {
    console.log(error.message);
  }
};

export const getSingleProduct = async (id: string) => {
  try {
    const { allProducts } = await getAllProducts();
    const singleProduct: Product = allProducts.find((singleProduct:Product) => singleProduct._id.toString() === id);
    return { singleProduct };
  } catch (error) {
    console.log(error.message);
  }
};

export const addNewProduct = async (product:string) => {
  try {
    const client = await clientPromise;
    const db = client.db("Used_Cars");
    const newProduct = await db.collection("products").insertOne(product);
  } catch (error) {
    console.log(error.message);
  }
};
export const deleteProduct = async (productId:string ) => {
  try {
    const client = await clientPromise;
    const db = client.db("Used_Cars");
    const productToDelete = await db.collection("products").deleteOne({ _id: productId });
  } catch (error) {
    console.log(error.message);
  }
};
export const updateProduct = async (productInputData, productId) => {
  try {
    const client = await clientPromise;
    const db = client.db("Used_Cars");
    await db.collection("products").updateOne(
      { _id: productId },
      {
        $set: {
          title: productInputData.title,
        },
      }
    );
  } catch (error) {
    console.log(error.message);
  }
};
