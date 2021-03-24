interface TitleValue {
    title: string;
    showTitle: () => void;
}

var book = {
    title: "Modyfikowny Wegiel",
    author: "Richard Morgan",
    showTitle(): void {
        alert(this.title);
    }
};

class film implements TitleValue {
    title: string;

    constructor(title: string) {
        this.title = title;
    }

    showTitle(): void {
        alert(this.title);
    }
}

var django = new film("django");

book.showTitle();
django.showTitle();
