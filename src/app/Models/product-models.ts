export module ProductModels {
  export interface IProduct {
    id: number,
    name: string,
    isDiscontinued: boolean,
    price?: number
  }
  
  export interface IProductPost {
    name: string,
    isDiscontinued: boolean,
    price?: number
  }

  export interface IProductPut {
    name: string,
    isDiscontinued: boolean,
    price?: number
  }
}

export default ProductModels;