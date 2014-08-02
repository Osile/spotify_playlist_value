$('#btnAuth').click(function(el){
       var url = 'https://accounts.spotify.com/authorize/';
       var client_id = 'd7b34968b76040198e003e715c4da88a';
       var response_type = 'code';
       var redirect_uri = encodeURIComponent('http://osile.github.io/spotify_playlist_value');

       window.location.href = url + '?client_id=' + client_id + '&response_type=' + response_type + '&redirect_uri=' + redirect_uri;
});
