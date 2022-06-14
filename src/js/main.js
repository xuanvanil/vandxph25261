import { render } from "./common.js";
import { workList } from "./data.js";

function showWork(works) {
  if (!Array.isArray(workList) || workList.length == 0) return [];
  let result ="";
  for (let i = 0; i < works.length; i++) {
    const workDT = works[i];
    result +=
    `
    <div class="md:flex py-4 border-b-2 border-inherit">
    <div class="md:mr-5">
      <img src="${workDT.img}" alt="" class="w-full" />
    </div>
    <div class="content">
      <h2 class="mt-4 text-2xl font-bold md:mt-0">
        <a href="./work_detail.html?id=${workDT.id}"> ${workDT.nameWork} </a>
      </h2>
      <div class="date-info my-4">
        <span class="bg-black text-white px-2 rounded-xl mr-6">${workDT.date}</span>
        <span class="opacity-70">${workDT.txt}</span>
      </div>
      <p>
        ${workDT.content}
      </p>
    </div>
  </div>
    `;
  }
  return result;
}

render("workShow", showWork(workList));

