function konversiMenit(menit) {
    var minute = menit / 60
    var second = menit % 60
    if(minute !== 0){
        if(second < 10){
            return Math.floor(minute) + ":0" + second;
        }
        return Math.floor(minute) + ":" + second;
    }
  }
  
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00