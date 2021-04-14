
document.getElementById("bmi_wt").addEventListener("keyup", () => {
  let wt = document.getElementById("bmi_wt").value;
  let ht = document.getElementById("bmi_ht").value;
  if (wt === "" || ht === "" || wt === "0" || ht === "0") {
    document.getElementById("p1").innerText = "";
    document.getElementById("p2").innerText = "";
    return;
  }

  let result = parseFloat(wt) / (parseFloat(ht / 100) * parseFloat(ht / 100));
  document.getElementById("p1").innerText = result.toFixed(2);

  let p2 = document.getElementById("p2");
  let res = result.toFixed(2);

  if (res < 18) {
    p2.innerText = "Underweight BMI";
  } else if (res >= 18 && res < 25) {
    p2.innerText = "Normal BMI";
  } else if (res >= 25 && res < 30) {
    p2.innerText = "Overweight BMI";
  } else if (res >= 30) {
    p2.innerText = "Obese BMI";
  } else {
    console.log("Code Error");
  }
});

document.getElementById("bmi_ht").addEventListener("keyup", () => {
  let wt = document.getElementById("bmi_wt").value;
  let ht = document.getElementById("bmi_ht").value;
  if (wt === "" || ht === "" || wt === "0" || ht === "0") {
    document.getElementById("p1").innerText = "";
    document.getElementById("p2").innerText = "";
    return;
  }

  let result = parseFloat(wt) / (parseFloat(ht / 100) * parseFloat(ht / 100));
  document.getElementById("p1").innerText = result.toFixed(2);

  let p2 = document.getElementById("p2");
  let res = result.toFixed(2);

  if (res < 18) {
    p2.innerText = "Underweight BMI";
  } else if (res >= 18 && res < 25) {
    p2.innerText = "Normal BMI";
  } else if (res >= 25 && res < 30) {
    p2.innerText = "Overweight BMI";
  } else if (res >= 30) {
    p2.innerText = "Obese BMI";
  } else {
    console.log("Code Error");
  }
});


