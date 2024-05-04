function calculateProduct() {
  var n = document.getElementById("inputN").value;
  var product = 1;
  for (var i = 0; i < n; i++) {
    product *= (2*i + 1) / (2*i + 2);
  }
  document.getElementById("result").innerHTML = "The product of the first " + n + " members of the sequence: " + product;
}
