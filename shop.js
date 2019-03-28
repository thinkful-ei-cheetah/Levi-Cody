'use strict';
//add new item to shopping list
function newItem() {
    $("#js-shopping-list-form").submit( function(event) {  
        event.preventDefault();
        let newItem = $(event.currentTarget).find('#shopping-list-entry');
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

function toggleButt() {
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
        const itemName = $(event.currentTarget).closest('.shopping-item').val();
        console.log(itemName);
        // console.log(this);
        $(itemName).addClass('shopping-item__checked');
    })
}

//delete item

// $('.shopping-item').addClass('shopping-item__checked')

$(function() {
    newItem();
    toggleButt();
});