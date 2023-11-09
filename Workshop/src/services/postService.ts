import { Post } from "../types/postTypes";
import { fetchUtil } from "../utils/httpUtil";
import { HttpService } from "./httpService";

export class PostsService extends HttpService<Post> {
  constructor(baseUrl: string) {
    super(`${baseUrl}/posts`);
  }

  getUserPosts(userId: number) {
    fetchUtil(`${this.apiUrl}?userId=${userId}`);
  }
}
