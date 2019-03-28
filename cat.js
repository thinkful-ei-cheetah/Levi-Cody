'use strict';
//function (thumbnail) -> replace hero element's content and attr
function displayThumb() {
    //replace hero class's img's src attribute with thumbnail's img's src attribute
    // console.log($('.thumbnail'));
    $('.thumbnail img').click(function(event){
        let cloneOfmedia = $(event.target).clone()
        $('.hero').html(cloneOfmedia)
    })
    // const thumbSrc = $(thumbnail).;
    // $('.hero').html(thumbnail);
    //replace hero class's img's alt attribute with thumbnail's img's alt attribute
}

//listener (thumbnail is selected) -> callback ^ function
function clickThumb() {}

//Wait for page to load, call functions
$(function(){
    displayThumb();
    console.log($('.thumbnail img'))
})