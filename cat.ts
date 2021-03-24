interface TitleValue{
    title: string
 }

 function showTitle(titleObject: TitleValue):void{
    alert(titleObject.title);
 }

 let book = {
    title: "Modyfikowny Wegiel",
    author: "Richard Morgan"
 }

 let film: TitleValue = {
     title: "django"
 }
 showTitle(book);
 showTitle(film);
  