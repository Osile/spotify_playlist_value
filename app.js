$('#btnAuth').click(function(el){
       $.get('https://accounts.spotify.com/authorize',{
         client_id: 'd7b34968b76040198e003e715c4da88a',
         response_type: 'code',
         redirect_uri: 'osile.github.com/spotify_playlist_value'
       },function(res){
         alert('yeah');
       });
});
