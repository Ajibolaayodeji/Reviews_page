//reviews 
const reviews = [
    {
        id: 1,
        name: "susan smith",
        job: "web developer",
        img: "http://127.0.0.1:5500/Reviews/%7B__dirname%7D./C:workspaceworksjs%20projectsReviewsimagesman_hat",
        info: "corporis recusandae exercitationem distinctio, praesentium iure dicta. Rerum, autem neque. Officiis, possimus, sapiente magni expedita repellendus provident quo amet quidem culpa eius dicta sint tempore et enim voluptate deserunt hic ad itaque nam temporibus vitae minus perspiciatis! Repellat suscipit accusamus magni ducimus, a accusantium odit laudantium molestias mollitia amet obcaecati expedita reiciendis ",
    },
    {
        id: 2,
        name: "anna johnson",
        job: "web developer",
        img: "https://res.cloudinary.com/dsku8ij5y/image/upload/v1680455834/samples/people/boy-snow-hoodie.jpg",
        info: "libero quos quidem nostrum ad eligendi illum nulla labore id, corporis ex delectus! Hic, pariatur possimus consectetur quod porro sint. Impedit harum corporis eos expedita soluta, ipsam vero tempora ullam inventore, quis velit nostrum exercitationem labore. Incidunt deserunt nesciunt, doloremque praesentium ut optio perspiciatis eum unde alias voluptate totam ea veniam cum pariatur atque quisquam quam natus! Corrupti earum "
    },
    {
        id: 3,
        name: "susan smith",
        job: "web developer",
        img: "https://res.cloudinary.com/dsku8ij5y/image/upload/v1680455833/samples/people/smiling-man.jpg",
        info: "asperiores error, nam tempore consequuntur minus deserunt delectus fugiat iste, ducimus labore quisquam porro nesciunt nemo enim possimus officia maxime distinctio quia unde! Unde pariatur quas sed nesciunt. Blanditiis distinctio placeat vitae libero unde cumque, deleniti, voluptatem amet ipsam quaerat illo quae aliquid quidem? Maxime vitae laudantium nemo nobis ex ipsum eveniet nihil aspernatur mollitia impedit."
    },
    {
        id: 4,
        name: "susan smith",
        job: "web developer",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v15868833334/person-1_rfzshl.jpg",
        info: "quis velit nostrum exercitationem labore. Incidunt deserunt nesciunt, doloremque praesentium ut optio perspiciatis eum unde alias voluptate totam ea veniam cum pariatur atque quisquam quam natus! Corrupti earum asperiores error, nam tempore consequuntur minus deserunt delectus fugiat iste, ducimus labore quisquam porro nesciunt nemo enim possimus officia maxime distinctio quia "
    }
]
// select items

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")
const random = document.querySelector(".random-btn")

//set starting item
let currentItem = 0;


// load initial item
window.addEventListener("DOMContentLoaded", function () {
    showPerson(currentItem);
});
function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}
getElementById("randon-btn").addEventListener("click", function () {
    currentItem = Math.floor(Math.random() * reviews.length),
    console.log("currentItem");
    showPerson();
})