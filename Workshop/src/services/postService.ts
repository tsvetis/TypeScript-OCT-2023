import { Post } from "../types/postTypes";
import { HttpService } from "./httpService";

export class PostsService extends HttpService<Post> {
  constructor(baseUrl: string) {
    super(`${baseUrl}/posts`);
  }
}
