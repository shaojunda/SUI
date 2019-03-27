function classes(...names: (string | undefined)[]) {
  console.log(typeof Boolean)
  return names.filter(Boolean).join(' ')
}

export default classes;
