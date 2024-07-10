const MAX_LEN = 5;

export function generate() {
  let result = "";
  const subset = "1234567890abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < MAX_LEN; i++) {
    result += subset[Math.floor(Math.random() * subset.length)];
  }
  return result;
}
