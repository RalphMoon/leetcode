/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function (s, t) {
    const sEntity = {};
    const tEntity = {};
    
    for (const char of s) {
        if (sEntity[char]) {
            sEntity[char]++;
            continue;
        }
        
        sEntity[char] = 1;
    }
    
    for (const char of t) {
        if (tEntity[char]) {
            tEntity[char]++;
            continue;
        }
        
        tEntity[char] = 1;
    }
    
    for (const [key, value] of Object.entries(sEntity)) {
        if (s.length !== t.length || !tEntity[key] || tEntity[key] !== value) {
          return false;
        }
      }

    return true;
};