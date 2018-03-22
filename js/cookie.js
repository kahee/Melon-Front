function setCookie(key, value, expires) {
  // Wed Mar 21 2018 12:28:43 GMT+0900 (KST) 이런식으로 날짜가 나옴
  var d = new Date()
  //getDate() 1970년부터 밀리세컨드로 더해진 row 숫자가 나옴
  d.setTime(d.getTime()+ expires*24*60*60*1000)
  var exdate = d.toUTCString();
  // 문자열로 다 합쳐짐
  document.cookie = key + "=" + value + ";" + "expires =" + exdate + ";"
}

function getCookie(key){
  // encodeURIComponent를 통해서 만들어진 URI 이스케이핑을 디코드 - 디코딩된 문자열 리턴
  var token = ' ';
  var decodedCookie = decodeURIComponent(document.cookie);
  // 빈문자열이 항상 있기 때문에 그것까지 포함해서 자른다.
  var cookie_list = decodedCookie.split('; ');
  var name = key + "="

  // index 몇번째 리스트인지, item 객체
  $(cookie_list).each(function(index, item){
    // === 객체 타입까지 확인
    if (item.indexOf(name) === 0) {
      token = item.split('=')[1];
    }
  });
  return token
}
