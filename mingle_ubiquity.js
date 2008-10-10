CmdUtils.CreateCommand({
  name: "mingle-grid-find",
  takes: {"card name": noun_arb_text},
  description: "Shows Mingle cards in the grid view based on your search",
  execute: function(select) {
    CmdUtils.loadJQuery(function(jQuery) {
      jQuery.noConflict();

      var hidden_cards = jQuery(".card-icon:hidden");
      hidden_cards.each(function(i) {
        var hider = jQuery(this);
        hider.fadeIn("slow");
      });

      var hide_these_cards = jQuery(".card-icon:not(:contains(" + select.text + "))");
      if(!hide_these_cards.length) return;

      hide_these_cards.each(function(i) {
        var item = jQuery(this);
        item.fadeOut("slow");
      });
    });
  }
});