var companies=[];


function extract(){
	var temp=document.getElementsByClassName("medium-3");
	    for (i=0;i<temp.length;i++){
        company={
            "link":temp[i].getElementsByTagName("a")[0].href,
			"name":temp[i].getElementsByTagName("a")[0].innerText,
			"photo":temp[i].getElementsByTagName("img")[0]!=null? temp[i].getElementsByTagName("img")[0].src:""
		}
		if(company.link.indexOf("https://www.wanneroobusiness.com/member-details")==0)
        companies.push(company);
    }
}
extract();
companies;
