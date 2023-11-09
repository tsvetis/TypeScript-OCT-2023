import { CONFIG } from "./constants";
import { router } from "./router";
import { PostsService } from "./services/postService";
import { UsersService } from "./services/userService";
import { User } from "./types/userTypes";
import { HtmlUtil } from "./utils/htmlUtil";

const rootDiv = document.getElementById("root");

const postsService = new PostsService(CONFIG.BASE_URL);

const usersService = new UsersService(CONFIG.BASE_URL);
const userId = 8;
usersService.getSingleUser(userId, () => {
  postsService.getUserPosts(userId);
});

// postsService.getAll();

// const userForUpdate: User = {
//   id: 1,
//   name: "Gosho 123",
//   phone: "123 123 125",
//   username: "goshoGoshov123",
//   email: "goshoGoshov123@abv.bgf",
// };

// usersService.update(userForUpdate);
// usersService.delete(3);

HtmlUtil.render(rootDiv, router);
