let year = 2024;
if (year % 4 == 0) {
  if (year % 100 == 0) {
    if (year % 400 == 0) {
      console.log("leap year");
    } else {
      console.log("its not leap year");
    }
  } else {
    console.log("its leap year");
  }
} else {
  console.log("its not leap year");
}
