function e(e, i, s, r) {
  Object.defineProperty(e, i, {
    get: s,
    set: r,
    enumerable: !0,
    configurable: !0,
  });
}
function i(e) {
  return e && e.__esModule ? e.default : e;
}
var s =
    "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof self
      ? self
      : "undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : {},
  r = {},
  n = {},
  t = s.parcelRequire6d3a;
null == t &&
  (((t = function (e) {
    if (e in r) return r[e].exports;
    if (e in n) {
      var i = n[e];
      delete n[e];
      var s = { id: e, exports: {} };
      return (r[e] = s), i.call(s.exports, s, s.exports), s.exports;
    }
    var t = Error("Cannot find module '" + e + "'");
    throw ((t.code = "MODULE_NOT_FOUND"), t);
  }).register = function (e, i) {
    n[e] = i;
  }),
  (s.parcelRequire6d3a = t)),
  t.register("27Lyk", function (i, s) {
    "use strict";
    e(
      i.exports,
      "register",
      () => r,
      (e) => (r = e)
    ),
      e(
        i.exports,
        "resolve",
        () => n,
        (e) => (n = e)
      );
    var r,
      n,
      t = {};
    (r = function (e) {
      for (var i = Object.keys(e), s = 0; s < i.length; s++) t[i[s]] = e[i[s]];
    }),
      (n = function (e) {
        var i = t[e];
        if (null == i) throw Error("Could not resolve bundle with id " + e);
        return i;
      });
  }),
  t("27Lyk").register(
    JSON.parse('{"f9fpV":"index.1fd32e5d.js","eyyUD":"icons.c14567a0.svg"}')
  );
var c = {};
c = new URL(t("27Lyk").resolve("eyyUD"), import.meta.url).toString();
const a = document.querySelector(".recipe"),
  o = function (e) {
    let s = `
  <div class="spinner">
    <svg>
      <use href="${i(c)}#icon-loader"></use>
    </svg>
  </div>
  `;
    (parent.innerHtml = ""), e.insertAdjacentHTML("afterbegin", s);
  },
  l = async function () {
    try {
      o(a);
      let e = await fetch(
          "https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886"
        ),
        s = await e.json();
      if (!e.ok) throw Error(`${s.message} (${e.status})`);
      let { recipe: r } = s.data;
      r = {
        id: r.id,
        title: r.title,
        cookingTime: r.cooking_time,
        imageUrl: r.image_url,
        Ingredient: r.ingredients,
        Publisher: r.publisher,
        Serving: r.servings,
        sourceUrl: r.source_url,
      };
      let n = `
    <figure class="recipe__fig">
    <img src=${r.imageUrl} alt=${r.title} class="recipe__img" />
    <h1 class="recipe__title">
      <span>${r.title}</span>
    </h1>
  </figure>

  <div class="recipe__details">
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="${i(c)}#icon-clock"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--minutes">${
        r.cookingTime
      }</span>
      <span class="recipe__info-text">minutes</span>
    </div>
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="${i(c)}#icon-users"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--people">${
        r.Serving
      }</span>
      <span class="recipe__info-text">servings</span>

      <div class="recipe__info-buttons">
        <button class="btn--tiny btn--increase-servings">
          <svg>
            <use href="${i(c)}#icon-minus-circle"></use>
          </svg>
        </button>
        <button class="btn--tiny btn--increase-servings">
          <svg>
            <use href="${i(c)}#icon-plus-circle"></use>
          </svg>
        </button>
      </div>
    </div>

    <div class="recipe__user-generated">
      <svg>
        <use href="${i(c)}#icon-user"></use>
      </svg>
    </div>
    <button class="btn--round">
      <svg class="">
        <use href="${i(c)}#icon-bookmark-fill"></use>
      </svg>
    </button>
  </div>

  <div class="recipe__ingredients">
    <h2 class="heading--2">Recipe ingredients</h2>
    <ul class="recipe__ingredient-list">
      <li class="recipe__ingredient">
        <svg class="recipe__icon">
          <use href="${i(c)}#icon-check"></use>
        </svg>
        <div class="recipe__quantity">1000</div>
        <div class="recipe__description">
          <span class="recipe__unit">g</span>
          pasta
        </div>
      </li>

      <li class="recipe__ingredient">
        <svg class="recipe__icon">
          <use href="${i(c)}#icon-check"></use>
        </svg>
        <div class="recipe__quantity">0.5</div>
        <div class="recipe__description">
          <span class="recipe__unit">cup</span>
          ricotta cheese
        </div>
      </li>
    </ul>
  </div>

  <div class="recipe__directions">
    <h2 class="heading--2">How to cook it</h2>
    <p class="recipe__directions-text">
      This recipe was carefully designed and tested by
      <span class="recipe__publisher">${r.Publisher}</span>. Please check out
      directions at their website.
    </p>
    <a
      class="btn--small recipe__btn"
      href="${r.sourceUrl}"
      target="_blank"
    >
      <span>Directions</span>
      <svg class="search__icon">
        <use href="${i(c)}#icon-arrow-right"></use>
      </svg>
    </a>
  </div>
    `;
      a.insertAdjacentHTML("afterbegin", n);
    } catch (e) {
      alert(e);
    }
  };
l();
//# sourceMappingURL=index.1fd32e5d.js.map
