import { PrismaClient, Product } from "@prisma/client";
const prisma = new PrismaClient();

export type FilteredProduct = Omit<Product, "createdAt" | "updatedAt" | "id">;

async function createProduct(data: FilteredProduct) {
  const user = await prisma.product.upsert({
    where: { name: data.name },
    update: {},
    create: {
      ...data,
    },
  });
}

async function main() {
  try {
    await createProduct({
      name: "Produto Químico 1",
      image_url:
        "https://images.pexels.com/photos/4226894/pexels-photo-4226894.jpeg?auto=compress&cs=tinysrgb&w=4454&h=6681&dpr=1",
      value: 19,
      score: 9.0,
      category: "CHEMICAL",
    });
    await createProduct({
      name: "Produto Químico 2",
      image_url:
        "https://images.pexels.com/photos/4226894/pexels-photo-4226894.jpeg?auto=compress&cs=tinysrgb&w=4454&h=6681&dpr=1",
      value: 132,
      score: 5.4,
      category: "CHEMICAL",
    });
    await createProduct({
      name: "Produto Químico 3",
      image_url:
        "https://images.pexels.com/photos/4226894/pexels-photo-4226894.jpeg?auto=compress&cs=tinysrgb&w=4454&h=6681&dpr=1",
      value: 50,
      score: 10.0,
      category: "CHEMICAL",
    });
    await createProduct({
      name: "Produto Vidraria 1",
      image_url:
        "https://images.pexels.com/photos/4299431/pexels-photo-4299431.jpeg?auto=compress&cs=tinysrgb&w=5568&h=3712&dpr=1",
      value: 602,
      score: 2.1,
      category: "HARDWARE",
    });
    await createProduct({
      name: "Produto Vidraria 2",
      image_url:
        "https://images.pexels.com/photos/4299431/pexels-photo-4299431.jpeg?auto=compress&cs=tinysrgb&w=5568&h=3712&dpr=1",
      value: 1340,
      score: 7.7,
      category: "HARDWARE",
    });
    await createProduct({
      name: "Produto Vidraria 3",
      image_url:
        "https://images.pexels.com/photos/4299431/pexels-photo-4299431.jpeg?auto=compress&cs=tinysrgb&w=5568&h=3712&dpr=1",
      value: 222,
      score: 8.1,
      category: "HARDWARE",
    });
    await createProduct({
      name: "Produto Ferramenta 1",
      image_url:
        "https://images.pexels.com/photos/5726706/pexels-photo-5726706.jpeg?auto=compress&cs=tinysrgb&w=2076&h=3691&dpr=1",
      value: 131,
      score: 9.9,
      category: "TOOL",
    });
    await createProduct({
      name: "Produto Ferramenta 2",
      image_url:
        "https://images.pexels.com/photos/5726706/pexels-photo-5726706.jpeg?auto=compress&cs=tinysrgb&w=2076&h=3691&dpr=1",
      value: 789,
      score: 8.0,
      category: "TOOL",
    });
    await createProduct({
      name: "Produto Ferramenta 3",
      image_url:
        "https://images.pexels.com/photos/5726706/pexels-photo-5726706.jpeg?auto=compress&cs=tinysrgb&w=2076&h=3691&dpr=1",
      value: 73,
      score: 6.5,
      category: "TOOL",
    });
  } catch (e) {
    console.error(e);
  } finally {
    await prisma.$disconnect();
  }
}

main();
