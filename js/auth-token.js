<script>

//1. AuthToken 을 받아오는 js함수 구현
// function getAuthToken  (username,password){
// 돌아온 token값을 console.log 출력
function getAuthToken (username,password){
  axios.post('http://localhost:8000/api/members/auth-token/',{
      'username':username,
      'password':password,
    })
    .then(function (response){
      var token = response.data.token;
      var user = response.data.user;
      // 3.위 링크를 참조해서 받아온 token 값을 'token'쿠키 key에 7일후 만료되도록 저장
      setCookie('token',token,7);
      setUserInfo(user);
  }).catch(function (error){
      console.log(error);
      console.log(error.response);
  });
}
// 2. form#login을 구현
// username, password를 받는 input2개와 submit역할을 하는 button
// 해당 form에 'sumbit'이 실행되었을 때, form자체의 'submit'기능 대신
// jquery를 사용해서 아래 getAuthToken()함수를 실행

$('form#login').submit(function(event){
  var username = $('#username').val();
  var password = $('#password').val();
  getAuthToken(username,password);

  $('#username').val('');
  $('#password').val('');
  event.preventDefault();
});
</script>
