const people = (state = [
  {
    "id": 3,
    "name": "gigi",
    "surname": "lacremeria",
    "nickname": "marcantonio",
    "pic": "http://img14.deviantart.net/8b5b/i/2015/203/1/4/dorian_profile___comic_style_by_tamarandom-d91vzo4.jpg"
  },
  {
    "id": 4,
    "name": "a",
    "surname": "ugallo",
    "nickname": "picchiarello",
    "pic": "http://2.bp.blogspot.com/_R_Sqi0a8BRc/SjkVcLr6KcI/AAAAAAAACAc/nAuTgdzgT4I/s400/woody-woodpecker.jpg"
  },
  {
    "id": 7,
    "name": "b",
    "surname": "ugallo",
    "nickname": "picchiarello",
    "pic": "http://2.bp.blogspot.com/_R_Sqi0a8BRc/SjkVcLr6KcI/AAAAAAAACAc/nAuTgdzgT4I/s400/woody-woodpecker.jpg"
  },
  {
    "id": 10,
    "name": "b1",
    "surname": "ugallo",
    "nickname": "picchiarello",
    "pic": "http://2.bp.blogspot.com/_R_Sqi0a8BRc/SjkVcLr6KcI/AAAAAAAACAc/nAuTgdzgT4I/s400/woody-woodpecker.jpg"
  },
  {
    "id": 13,
    "name": "tushar",
    "surname": "ugallo",
    "nickname": "picchiarello",
    "pic": "http://2.bp.blogspot.com/_R_Sqi0a8BRc/SjkVcLr6KcI/AAAAAAAACAc/nAuTgdzgT4I/s400/woody-woodpecker.jpg"
  },
  {
    "id": 16,
    "name": "tushy",
    "surname": "ugallo",
    "nickname": "picchiarello",
    "pic": "http://2.bp.blogspot.com/_R_Sqi0a8BRc/SjkVcLr6KcI/AAAAAAAACAc/nAuTgdzgT4I/s400/woody-woodpecker.jpg"
  },
    
]
, action) => {
  switch (action.type) {
    case 'GET_PEOPLE':
      return state
    default:
      return state
  }
}

export default people