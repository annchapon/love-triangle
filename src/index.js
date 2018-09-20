/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let love = 0;
  let lgth = preferences.length;  
  for ( let i = 0; i < lgth; i++) {
	  let a = preferences[i];
	  if ( a-1 === i) continue;
	  let b = preferences[a-1];
	  let c = preferences[b-1];
	  if (c-1 === i) love++;
  }
  return love/3;
};
