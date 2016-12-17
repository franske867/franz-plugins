module.exports = (Franz, options) => {
  var notifytest_messages = '';
  function getMessages() {
    const count = document.getElementById('notifcount').innerHTML;
    if (count) {
		    Franz.setBadge(count);
    }

    /*
     * Popup Notifications
     */

    // get the current content of the notifications div
    newtext = document.getElementById('notifications').innerHTML;
    // find a difference
    if ( newtext.length > notifytest_messages.length ) {
      diff = newtext.substring(notifytest_messages.length);
      new Notification('Notify Test', {body: diff});
    }
    notifytest_messages = newtext;
  }

  Franz.loop(getMessages);
}
