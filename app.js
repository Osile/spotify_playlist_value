$('#btnAuth').click(function(el){
       $.ajax({
            url: "https://accounts.spotify.com/authorize",
            type: "GET",
            data: {
              client_id: 'd7b34968b76040198e003e715c4da88a',
              response_type: 'code',
              redirect_uri:''
            },
            async: false,
            success:function(msg){

            }
        });
});
