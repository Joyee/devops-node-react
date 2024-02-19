/**
 * get url querystring parameter
 * @param {string} name
 * @returns {string | null}
 */
export function getQueryString(name: any) {
  let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
  let str = window.location.href;
  let index = str.indexOf('?');
  let result = str.substring(index + 1, str.length);
  let r = result.match(reg);
  // eslint-disable-next-line eqeqeq
  if (r != null) {
    return decodeURI(r[2]);
  }
  return null;
}
