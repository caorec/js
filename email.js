function email(string) {
  let check = string.match(/\w+@\w+\.\w+/);
  if (!!check) {
      let result = new Map([
        [`login`, string.split("@")[0].toLowerCase()],
        [`domain`, string.split("@")[1].toLowerCase()]
      ]);
      return result;
  }
  else {
    return "It is not an email";
  }
}
