export interface IResponse<T> {
  previousPage?: number,
  currentPage?: number,
  nextPage?: number,
  lastPage: number,
  responseList: T[]
}