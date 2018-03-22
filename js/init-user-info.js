
  <script>
  // function intiUserInfo(){}
  // 1. 클라이언트에 'token'이라는 Cookie가 있는지 확인
  // 2. 만약 있다면 해당 값을 가져온 후
  // 3. getUserInfo()를 실행 -> UserDetail에 get 요청, pk 없음
  // URL : /api/members/info/
  // HTTP Header 'Authorization'에 Token<value> 담아서 요청
  // request.user 를 기준으로 serialize한 User정보를 리턴
  // 4. 유저 정보를 가져온 후, getAuthToken의 .then()아래 유저정보 표시 로직을 실행
  function initUserInfo(){
    var token = getCookie('token')
    if ( token != ''){
      axios({
        url: 'http://localhost:8000/api/members/info/',
        method: 'get',
        headers: {
          Authorization : 'Token '+ token
        }
      }).then(function (response){
          setUserInfo(response.data);
      }).catch(function (error){
          console.log(error);
          console.log(error.response);
      });
    }
  }


  function setUserInfo(user){
    $('#user-login').text(user.username+ '(으)로 로그인 중');
    $('#user-login').removeClass('none');
    $('#login').addClass('none');
  }

  </script>
