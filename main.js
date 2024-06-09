function kaa(a, b) {
  return `${a} is ${2024 - b} yers old`;
}
console.log(kaa("jhon", 1990));
console.log(kaa("selena", 2001));
function parametr(a) {
  return 4 * a;
}
console.log(parametr(5));
function yuza(a) {
  return a * a;
}
console.log(yuza(7));
function perimetr(a, b) {
  let s = a * b;
  let p = 2 * (a + b);
  return `yuzasi: ${s}  peremetiri ${p}   `;
}
console.log(perimetr(7, 8));
function aylana(d) {
  let l = 3.14 * d;
  return `aylanani uzunligi: ${d}     `;
}
console.log(aylana(6));
function kub(a) {
  let V = a * a * a;
  let S = 6 * a * a;
  return `hajmi: ${V}  to'la sirt ${S}   `;
}
console.log(kub(3));
function paralapepet(a, b, c) {
  let V = a * b * c;
  let S = 2 * (a * b + b * c + a * c);
  return `hajmi: ${V}  to'la sirt ${S}   `;
}
console.log(paralapepet(5, 7, 6));
function doira(a) {
  let L = 2 * 3.14 * a;
  let S = 3.14 * a * a;
  return `uzunligi: ${L}  yuzasi ${S}   `;
}
console.log(doira(5));
function number(a, b) {
  let d = (a + b) / 2;

  return `orta arfmetik ${d}   `;
}
console.log(number(5, 6));
function ildz(a, b) {
  let n = Math.sqrt(a * b);
  return `ildiz ${n}`

}
console.log(ildz(10, 7));
function nol(a, b) {
  let d = a + b;
  let c = a * b;
  let v = a * a;
  let h = b * b;
  return `yigindisi ${d} ko'paytmasi ${c}  kavadrati 1-${v} 2-${h} `;
}
console.log(nol(8, 7));
