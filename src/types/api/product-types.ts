export type ProductType =
  | "newest"
  | "low_price"
  | "high_price"
  | "high_discount_rate"
  | "best";

// 상품의 가격 정보 타입
export interface Price {
  tag: number;
  real: number;
  discountRate: number;
  maxDiscountPrice: number;
  maxDiscountRate: number;
}

// 상품 정보 타입
export interface Product {
  code: string;
  name: string;
  statusCode: string;
  brandName: string;
  brandId: number;
  price: Price;
  url: string;
  isFavorite: boolean;
  isSoldOut: boolean;
  deliveryFeeCode: string;
  badges: string[] | null;
}

// 페이지 정보 타입
export interface PageInfo {
  page: number;
  size: number;
  total: number;
  pages: number;
}

export interface MetaData {
  checkSum: string | null;
  pageInfo: PageInfo;
}

export interface ProductResponseBody {
  meta: MetaData;
  body: Product[];
}

export interface ProductResponse {
  status: number;
  data: {
    status: number;
    data: ProductResponseBody;
  };
}
