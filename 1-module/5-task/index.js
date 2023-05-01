function truncate(str, maxlength) {
  if (str.length > maxlength) {
    let extraText = str.substr(0, --maxlength) + '…';
    return extraText;
  } else {
    return str;
  }
}
