var normalize = window.jsonApiNormalize;
var jsonData = {"data":[{"id":"593196b99566d00039b8d49f","type":"courseLectures","attributes":{"createdAt":"2017-06-02T13:47:53.536-03:00","slug":"aulinha","description":"","moduleId":null,"position":0,"subscriptionIds":[],"teamIds":[],"title":"aulinha","updatedAt":"2017-06-02T14:42:05.260-03:00","extra":false,"minimumGrade":-1.0,"publishedAt":"2017-06-02","alwaysReleased":true,"releasesAt":null,"releasesAtFuture":null,"releasesIn":null,"showForum":true,"free":false,"private":false},"relationships":{"attendances":{"data":[{"id":"5931a36d1ffddc0036a5fdba","type":"courseLectureAttendances"}]},"contents":{"data":[]},"course":{"data":{"id":"591adfd54dad4e004580385f","type":"courseReals"}}}}],"included":[{"id":"5931a36d1ffddc0036a5fdba","type":"courseLectureAttendances","attributes":{"Id":"5931a36d1ffddc0036a5fdba","date":"2017-06-02T14:42:03.000-03:00","place":"","tutorId":null,"past":true}}]};

var n = normalize(jsonData).get(['type', 'contents.id', 'attendances.date'])[0]
var test = ['contents', 'attendances'];

function ebNormalize(nData, relationships) {
  for(var index in relationships) {
    
    for (var [key, value] of Object.entries(nData)) {
      if (relationships[index] == key) {
        
        nData[key] = nData[key] ? nData[key] : [];
        nData[key] = Array.isArray(nData[key]) ? nData[key] : [nData[key]];

      }
    }
  }
  console.log(nData);
}

console.log(n);
ebNormalize(n, test);