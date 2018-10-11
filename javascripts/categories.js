var categories=[];

extract();
categories;

function extract(){
    var temp=document.getElementsByClassName("catalogueList")[0].getElementsByTagName("a");
    for (i=0;i<temp.length;i++){
        category={
            "link":temp[i].href,
            "name":temp[i].innerText
        }
        categories.push(category);
    }
}
