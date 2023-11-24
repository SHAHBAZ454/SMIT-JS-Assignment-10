const showBtn = document.querySelector(".show");
const para = document.querySelector(".para");
var content = para.innerHTML;

showBtn.addEventListener("click", () => {
  if (para.innerHTML == content) {
    para.textContent = `  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
        consequatur officiis repudiandae similique laboriosam est eaque.
        Voluptates repellat omnis, a minus id harum ut provident vel ab, esse
        eum placeat sed, quidem eveniet veritatis voluptatibus dolores totam
        quasi? Nostrum, sit.Sunt exercitationem ratione fuga labore.
        Reprehenderit inventore neque esse, aperiam quas officiis, provident
        repellat optio molestias quisquam illo labore voluptatem iusto eum aut
        dolor. Ea deleniti enim suscipit fuga culpa asperiores quis sequi
        tenetur, animi vero pariatur, ducimus non reiciendis commodi cumque
        dicta, eum molestias porro at saepe officiis. Veritatis eaque numquam
        consequuntur veniam accusantium error reprehenderit, ad iusto quae.`;

    showBtn.textContent = `Show Less`;
  } else {
    para.textContent = content;

    showBtn.textContent = `Show more`;
  }
});

// ? QUESTION 3

const Delete = document.querySelector(".delete");
const Delete1 = document.querySelector(".delete1");
const Delete2 = document.querySelector(".delete2");
const t = document.querySelector(".t1");
const t1 = document.querySelector(".t2");
const t2 = document.querySelector(".t3");

Delete.addEventListener("click", () => {
  t.style.display = "none";
});
Delete1.addEventListener("click", () => {
  t1.style.display = "none";
});
Delete2.addEventListener("click", () => {
  t2.style.display = "none";
});

const edit = document.querySelector(".edit");
const user = document.querySelector(".user");
const marks = document.querySelector(".marks");

edit.addEventListener("click", () => {
  user.textContent = `${prompt()}`;
  marks.textContent = `${prompt()}`;
});

const edit1 = document.querySelector(".edit1");
const user1 = document.querySelector(".user1");
const marks1 = document.querySelector(".marks1");

edit1.addEventListener("click", () => {
  user1.textContent = `${prompt()}`;
  marks1.textContent = `${prompt()}`;
});

const edit2 = document.querySelector(".edit2");
const user2 = document.querySelector(".user2");
const marks2 = document.querySelector(".marks2");

edit2.addEventListener("click", () => {
  user2.textContent = `${prompt()}`;
  marks2.textContent = `${prompt()}`;
});