interface TitleValue {
    title: string;
    showTitle: () => void;
}

var book = {
    title2: "Modyfikowny Wegiel",
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
        //consol.log(this.title)
    }
}

var django = new film("django");

book.showTitle();
django.showTitle();


function ala(something: TitleValue) : string{
    return something.title;
}

ala(book);