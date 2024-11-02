$(document).ready(function () {
  $("#imageSelect").select2({
    templateResult: formatState,
    templateSelection: formatState,
  });

  function formatState(state) {
    if (!state.id) {
      return state.text;
    }
    var $state = $(
      '<span><img src="' +
        $(state.element).data("image") +
        '" style="width:60px; height:17px; margin-right:10px; vertical-align:middle;"/> ' +
        state.text +
        "</span>"
    );
    return $state;
  }
});
