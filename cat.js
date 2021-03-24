var book = {
    title: "Modyfikowny Wegiel",
    author: "Richard Morgan",
    showTitle: function () {
        alert(this.title);
    }
};
var film = /** @class */ (function () {
    function film(title) {
        this.title = title;
    }
    film.prototype.showTitle = function () {
        alert(this.title);
        //consol.log(this.title)
    };
    return film;
}());
var django = new film("django");
book.showTitle();
django.showTitle();
function ala(something) {
    return something.title;
}
ala(book);
