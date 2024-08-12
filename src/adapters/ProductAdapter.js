export const createProductAdaptedFromFirebase = ( doc ) => {
  const data = doc.data()

  return {
      id: doc.id,
      name: data.name,
      category: data.category,
      price: data.price,
      stock: data.stock,
      description: data.description,
      img1: data.img1,
      img2: data.img2
  }
}
