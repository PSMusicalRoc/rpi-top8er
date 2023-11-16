function parseARGV(argv) {
  let out = [];
  for (const value of argv) {
    const temp = value.split("=");
    out.push({
      key: temp[0],
      value: temp[1]
    });
  }

  return out;
}

export {parseARGV};
