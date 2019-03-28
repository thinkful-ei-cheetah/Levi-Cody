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
      $(newItem).val('');
    })
}
//toggle item status

function toggleButt() {
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
        const buttLi = $(event.currentTarget).closest('li');
        const liSpan = $(buttLi).find('.shopping-item');
        $(liSpan).toggleClass('shopping-item__checked');
    })
}

//delete item

function deleteButt() {
    $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
        $(event.currentTarget).closest('li').remove();
    })
}

// $('.shopping-item').addClass('shopping-item__checked')

$(function() {
    newItem();
    toggleButt();
    deleteButt();
});