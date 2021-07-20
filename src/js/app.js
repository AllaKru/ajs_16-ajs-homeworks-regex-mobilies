
export default function mobileValidator(number) {
  return number.replace(/[() -]/g, '').replace(/^(8|7)/, '+7');
}
