'use strict';
//add new item to shopping list
function newItem() {
    $("#js-shopping-list-form").submit( function(event) {  
        event.preventDefault();
        let newItem = $(event.currentTarget).find('#shopping-list-entry');
    //    if( typeof $('shopping-list-entry') === 'string'){
    //        throw new Error('need this please')
    //    }
      $("ul").append(
        `<li>
        <span class="shopping-item">${newItem.val()}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`
      );
    })
}
//toggle item status

//delete item


$(newItem());
// console.log('hello world')