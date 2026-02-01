var t1 = document.getElementById("oneTab");

var t2 = document.getElementById("twoTab");

function tabTwo() {
  t1.style.color = "#000";
  t1.style.background = "#aaa";
  t2.style.color = "#fff";
  t2.style.background = "#3498bd";

  var text2 = document.getElementById("tabInfo");
  text2.innerHTML =
    "<h3>This is Tab Two</h3> <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.Quam quibusdam quasi possimus iste reprehenderit molestiae neque odit illo laboriosam natus, saepe eligendi atque repellendus cum nulla pariatur inventore quia laborum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam quibusdam quasi possimus iste reprehenderit molestiae neque odit illo laboriosam natus, saepe eligendi atque repellendus cum nulla pariatur inventore quia laborum.</p > ";
}

function tabOne() {
  t2.style.color = "#000";
  t2.style.background = "#aaa";
  t1.style.color = "#fff";
  t1.style.background = "#3498bd";

  var text1 = document.getElementById("tabInfo");
  text1.innerHTML =
    "<h3>This is Tab One</h3> <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.Quam quibusdam quasi possimus iste reprehenderit molestiae neque odit illo laboriosam natus, saepe eligendi atque repellendus cum nulla pariatur inventore quia laborum. </p > ";
}
