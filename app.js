var app = {
  client_id: 'd7b34968b76040198e003e715c4da88a',
  secret: 'c68d68c0d407487dac379d0935816b2b',
  redirect_uri: encodeURIComponent('http://osile.github.io/spotify_playlist_value'),
  apibase: 'https://api.spotify.com',
  init: function(){
    this.createHandlers();
    this.getUrlVars();
    console.log('THIS',this);
    if (this.params){
           $.ajax({
              url: "https://accounts.spotify.com/api/token",
              type: "POST",
              data: {
                grant_type: 'authorization_code',
                code: this.params.code,
                redirect_uri: this.redirect_uri,
                client_id: this.client_id,
                client_secret: this.secret
              },
              async: false,
              success:function(res){
                console.log(res.expires_in);
                this.getUserId(this.getPlaylists);
              }
          });
    }
  },
  getPlaylists:function(){
    $.ajax({
       url: this.apibase + '/v1/users/'+this.userid + '/playlists',
       type: "GET",
       data: {
         grant_type: 'authorization_code',
         code: params.code,
         redirect_uri: this.redirect_uri,
         client_id: this.client_id,
         client_secret: this.secret,

       },
       async: false,
       success:function(res){
         console.log(res);
       }
   });
  },
  getUserId:function(cb){
    $.ajax({
       url: this.apibase + '/v1/me',
       type: "GET",
       data: {
         Authorization: this.auth_token
       },
       async: false,
       success:function(res){
         console.log(res);
         this.userid = res.id;
         cb();
       }
    });
  },
  getUrlVars:function(){
    {
        var vars = {}, hash;
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for(var i = 0; i < hashes.length; i++)
        {
            hash = hashes[i].split('=');
            console.log(hash);
            vars[hash[0]] = hash[1];
        }
        if(window.location.href.indexOf('?') >= 0){
          this.params = vars;
        }

    }
  },
  createHandlers:function(){
    self=this;
    $('#btnAuth').click(function(el){
           var url = 'https://accounts.spotify.com/authorize/';
           var response_type = 'code';
           window.location.href = url + '?client_id=' + self.client_id + '&response_type=' + response_type + '&redirect_uri=' + self.redirect_uri + '&state=authed';
    });
  }
};
app.init();
