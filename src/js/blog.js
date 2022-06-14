import { render } from "./common.js";
import { blogList } from "./data_blog.js";

function showBlog(blogs) {
  if (!Array.isArray(blogList) || blogList.length == 0) return [];
  let result = "";
  for (let i = 0; i < blogs.length; i++) {
    const blog_Detail = blogs[i];
    result += `
    <div>
      <div class="content-blog border-b pb-7">
            <a href="./blog_detail.html?id=${blog_Detail.id}">
              <h2 class="mt-8 text-3xl font-medium">
                ${blog_Detail.title}
              </h2>
            </a>
            <div class="my-4">
              <span>${blog_Detail.date}</span>
              <span class="mx-5">|</span>
              <span class="opacity-70">${blog_Detail.board}</span>
            </div>
            <p>
                  ${blog_Detail.short_description}
            </p>
      </div>
    </div>
    `;
  }
  return result;
}

render("blogShow", showBlog(blogList));
