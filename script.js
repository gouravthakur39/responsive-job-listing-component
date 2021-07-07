$(document).ready(function () {
  $(".tags-container .tags").on("click", function () {
    var css = $('.card-container[data-css="' + this.id + '"]');
    var javascript = $('.card-container[data-javascript="' + this.id + '"]');
    var junior = $('.card-container[data-junior="' + this.id + '"]');
    var senior = $('.card-container[data-senior="' + this.id + '"]');
    var frontend = $('.card-container[data-frontend="' + this.id + '"]');
    var fullstack = $('.card-container[data-fullstack="' + this.id + '"]');
    var react = $('.card-container[data-react="' + this.id + '"]');
    var saas = $('.card-container[data-saas="' + this.id + '"]');
    var midweight = $('.card-container[data-midweight="' + this.id + '"]');
    var python = $('.card-container[data-python="' + this.id + '"]');
    var html = $('.card-container[data-html="' + this.id + '"]');
    var ruby = $('.card-container[data-ruby="' + this.id + '"]');
    var backend = $('.card-container[data-backend="' + this.id + '"]');
    var ror = $('.card-container[data-ror="' + this.id + '"]');
    var vue = $('.card-container[data-vue="' + this.id + '"]');
    var django = $('.card-container[data-django="' + this.id + '"]');
    $(".card-container").not(css).hide();
    $(".card-container").not(javascript).hide();
    $(".card-container").not(junior).hide();
    $(".card-container").not(senior).hide();
    $(".card-container").not(frontend).hide();
    $(".card-container").not(fullstack).hide();
    $(".card-container").not(react).hide();
    $(".card-container").not(saas).hide();
    $(".card-container").not(midweight).hide();
    $(".card-container").not(python).hide();
    $(".card-container").not(html).hide();
    $(".card-container").not(ruby).hide();
    $(".card-container").not(backend).hide();
    $(".card-container").not(ror).hide();
    $(".card-container").not(vue).hide();
    $(".card-container").not(django).hide();
    css.show();
    javascript.show();
    junior.show();
    senior.show();
    frontend.show();
    fullstack.show();
    react.show();
    saas.show();
    midweight.show();
    python.show();
    html.show();
    ruby.show();
    backend.show();
    ror.show();
    vue.show();
    django.show();
  });
});

const filteredCard = document.querySelector(".filtered-card");
const listContainer = document.querySelector(".list-container");
const cardContainer = document.querySelector(".card-container");
const tag = document.querySelector(".tags");

window.onload = function changesOnLoad() {
  filteredCard.style.display = "none";
  listContainer.style.margin = "-20px auto";
};

function tagClicked() {
  if (filteredCard.style.display === "none") {
    filteredCard.style.display = "block";
    listContainer.style.margin = "20px auto";
  } else {
    filteredCard.style.display = "none";
    listContainer.style.margin = "-20px auto";
  }
}
