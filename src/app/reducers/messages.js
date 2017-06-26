const messages = (state = [{
        "id": 1,
        "body": "see you later",
        "date": "19/03/2016 20:17",
        "from": "a",
        "to": "anaketa"
    },
    {
        "id": 2,
        "body": "Where are you?",
        "date": "09/04/2016 08:45",
        "from": "b",
        "to": "anaketa"
    },
    {
        "id": 3,
        "body": "Haloo??",
        "date": "19/04/2016 16:23",
        "from": "tushar",
        "to": "anaketa"
    },
    {
        "id": 1461684820185,
        "body": "waiting..",
        "date": "26/04/2016 10:03",
        "from": "tushy",
        "to": "anaketa"
    },
    {
        "id": 1461684998741,
        "body": "hey!! Long time i don't hear from you!",
        "date": "26/04/2016 18:43",
        "from": "b1",
        "to": "anaketa"
    },
    {
        "id": 1461695721589,
        "body": "true that!",
        "date": "26/04/2016 08:35",
        "from": "gigi",
        "to": "anaketa"
    }], action) => {
  switch (action.type) {
    case 'ADD_MSG':
      return [
        ...state,
        {
            "id": action.msg.id,
            "body": action.msg.body,
            "date": action.msg.date,
            "from": action.msg.from,
            "to": action.msg.to
        }
      ]
    default:
      return state
  }
}

export default messages