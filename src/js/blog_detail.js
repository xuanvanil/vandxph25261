import { render } from "./common.js";
import { blogList } from "./data_blog.js";

const id = new URLSearchParams(window.location.search).get("id");

const blog = blogList.find((item) => item.id == id);
const result = `
    <div class="title">
        <h1 class="font-bold text-3xl">${blog.title}</h1>
        <p>
            ${blog.short_description}
        </p>
    </div>
    <div class="date my-1 text-[12px] ml-4">
        <span>${blog.date}</span>
        <span class="mx-5">|</span>
        <span>${blog.board}</span>
    </div>
    <img src="${blog.img}" alt="" class="w-full">
    <div class="description max-w-[1152px] my-5">
        ${blog.description}
    </div> 
`;

render("blog_detail", result);
