

 
Extraction_Parameter={
    "Api":[],

    "source":{
        "account_id":"",
        "keyword":"",
        "page_group":""

    },
    "limits":{

        "account_limit":"",
        "post_limits":"",
        "comment_limits":"",
        "time_limits":"",
        "data_type":""
    }
}




function validate1(val) {
    v1 = document.getElementById("fname");
    v2 = document.getElementById("lname");
    v3 = document.getElementById("email");
     
    flag1 = true;
    flag2 = true;
    flag3 = true;
     
    if(v1.value == "") {
    v1.style.borderColor = "red";
    
    flag1 = false;
    }
    else {
    v1.style.borderColor = "green";
    flag1 = true;
    }
    
    
    if(v2.value == "") {
    v2.style.borderColor = "red";
    flag2 = false;
    }
    else {
    v2.style.borderColor = "green";
    flag2 = true;
    }
    
     
    if(v3.value == "") {
    v3.style.borderColor = "red";
    flag3 = false;
    }
    else {
    v3.style.borderColor = "green";
    flag3 = true;
    }
    
    if (v1.value == "" && v2.value == "" &&v3.value == "") {
        v1.style.borderColor = "red";
        v2.style.borderColor = "red";
        v3.style.borderColor = "red";
       // alert('*-*-*- Select -*-*-*- At_Least-*-*-* One -*-*-*-*')

        return false
        
    }
    else {
        Extraction_Parameter["source"]["account_id"]=v1.value
        Extraction_Parameter["source"]["keyword"]=v2.value
        Extraction_Parameter["source"]["page_group"]=v3.value
        
        return true
    }
 
    }








    function validate2(val) {
    v1 = document.getElementById("cname");
    v2 = document.getElementById("zip");
    v3 = document.getElementById("state");
    v4 = document.getElementById("city");
    v5 = document.getElementById("select");
    flag1 = true;
    flag2 = true;
    flag3 = true;
    flag4 = true;
   
   
    if(v1.value == "") {
    v1.style.borderColor = "red";
    flag1 = false;
    }
    else {
    v1.style.borderColor = "green";
    flag1 = true;
    }
    
    
    if(v2.value == "") {
    v2.style.borderColor = "red";
    flag2 = false;
    }
    else {
    v2.style.borderColor = "green";
    flag2 = true;
    }
    
   
    if(v3.value == "") {
    v3.style.borderColor = "red";
    flag3 = false;
    }
    else {
    v3.style.borderColor = "green";
    flag3 = true;
    }
    
    
    if(v4.value == "") {
    v4.style.borderColor = "red";
    flag4 = false;
    }
    else {
    v4.style.borderColor = "green";
    flag4 = true;
    }
    
    if (v1.value == "" && v2.value == "" &&v3.value == "" && v4.value == "") {
        v1.style.borderColor = "red";
        v2.style.borderColor = "red";
        v3.style.borderColor = "red";
        v4.style.borderColor = "red";
       
       // alert('*-*-*- Select -*-*-*- At_Least-*-*-* One -*-*-*-*')

        return false
        
    }
    else {
        Extraction_Parameter["limits"]["account_id"]=v1.value
        Extraction_Parameter["limits"]["post_limits"]=v2.value
        Extraction_Parameter["limits"]["comment_limits"]=v3.value
        Extraction_Parameter["limits"]["time_limits"]=v4.value
        Extraction_Parameter["limits"]["data_type"]=v5.value
        return true
    }
    
    }






    $(document).ready(function(){
    var current_fs, next_fs, previous_fs;
    $(".next").click(function(){
    str1 = "next1";
    str2 = "next2";
    str3 = "next3";
    if(!str2.localeCompare($(this).attr('id')) && validate1(0) == true) {
    val2 = true;
    }
    else {
    val2 = false;
    }
    if(!str3.localeCompare($(this).attr('id')) && validate2(0) == true) {
    val3 = true;
    }
    else {
    val3 = false;
    }
    if(!str1.localeCompare($(this).attr('id')) || (!str2.localeCompare($(this).attr('id')) && val2 == true) || (!str3.localeCompare($(this).attr('id')) && val3 == true)) {
      
    current_fs = $(this).parent().parent();
    next_fs = $(this).parent().parent().next();
    $(current_fs).removeClass("show");
    $(next_fs).addClass("show");
    $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
    current_fs.animate({}, {
    step: function() {
    current_fs.css({
    'display': 'none',
    'position': 'relative'
    });
    next_fs.css({
    'display': 'block'
    });
    }
    });
    }

    if (val3==true) {
        send_Request()
        
    }
    });
    $(".prev").click(function(){
    current_fs = $(this).parent().parent();
    previous_fs = $(this).parent().parent().prev();
    $(current_fs).removeClass("show");
    $(previous_fs).addClass("show");
    $("#progressbar li").eq($("fieldset").index(next_fs)).removeClass("active");
    current_fs.animate({}, {
    step: function() {
    current_fs.css({
    'display': 'none',
    'position': 'relative'
    });
    previous_fs.css({
    'display': 'block'
    });
    }
    });
    });
    $('.radio-group .radio').click(function(){
    $(this).toggleClass('selected');
    });
    });


     


// Send Request to extraction


    function send_Request()
    {
         
        url=window.location.href
        api_name=get_Rx(url)
        api_name_maj=api_name.toUpperCase()
        key_api=api_name_maj+"_NEXT_USER_ID"
    
        // var unindexed_array = $(this).serializeArray();
        var data = {
            "api":"",
            "model":["id"],
            "starting_node":{}
        }
        data["api"]=api_name
        data["starting_node"][key_api]= Extraction_Parameter["source"]["account_id"]
        console.log(data)
    

        //Send request to Extraction Api 
             console.log(data)

        var request = {
            "url" : 'http://localhost:2018/',
            "method" : "GET",
            "origin":"*",
            "allowHeaders":['Content-Type'],
            "data" : data
        }
        $.ajax(request).done(function(response){
            alert("Data Updated Successfully!");
            window.history.back
        })
         
    }

 

$/*("#submitVal").submit(function(event){
    event.preventDefault();
    alert("eeeeeeeeeeeee")
    ali()
      
    // var unindexed_array = $(this).serializeArray();
    /*var data = {}
    data["target"]=document.getElementById("Target_ID").value
     

    
   // data["nbre_friend"]
   
    
    var request = {
        "url" : 'http://localhost:2018/',
        "method" : "GET",
        "origin":"*",
        "allowHeaders":['Content-Type'],
        "data" : data
    }
    $.ajax(request).done(function(response){
        alert("Data Updated Successfully!");
        window.history.back
    })
})*/


// GEet api name from url


function get_Rx(url)
{
    
    Tab_Rx=["facebook","twitter","linkedin"]
    for (let i = 0; i < Tab_Rx.length; i++) {
        if (url.includes(Tab_Rx[i]))
        {
            return Tab_Rx[i]

                }
        
    }
    return '0'


}