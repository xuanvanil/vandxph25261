import { render } from "./common.js";
import { workList } from "./data.js";

const id = new URLSearchParams(window.location.search).get("id");

const work = workList.find((item) => item.id == id);

const result = `
        <h1 class="max-w-[506px] mt-[78px] mb-[30px] font-bold text-3xl md:text-4xl">
            ${work.nameWork}
        </h1>
        <div class="mt-[30px] mb-6">
            <span class="bg-[#FF7C7C] font-black text-white px-2 rounded-xl mr-4">
                ${work.date}
            </span>
            <span class="text-lg md:text-xl">
                ${work.txt}
            </span>
        </div>
        <p class="mt-6 mb-12 text-base	">
            ${work.content}
        </p>
        <img src="${work.img}" alt="" class="mb-14 w-full" />
        <h1 class="font-medium text-2xl md:text-3xl">
           ${work.nameWork}
        </h1>
        <h2 class="my-4 font-medium text-xl	md:text-2xl">
            ${work.nameWork}
        </h2>
        <p class="my-7 text-base">
            ${work.content}
        </p>
        <img src="${work.img}" alt="" class="mb-14 w-full" />
        <img src="${work.img}" alt="" class="mb-14 w-full" />
`;
render("work_detail", result);
