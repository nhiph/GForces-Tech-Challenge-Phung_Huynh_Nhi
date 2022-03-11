import { BaseService } from "./BaseService";

export class BookService extends BaseService {
    getBooks = (keyword) => {
        return this.get(`/v1/volumes?q=${keyword}`)
    }
}
export const bookService = new BookService();