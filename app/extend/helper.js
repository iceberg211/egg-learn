'use strict';

// module.exports = {
//   where(obj, ...args) {
//     return Object.assign(
//       {
//         where: obj,
//       },
//       ...args
//     );
//   },
// };

exports.throw = (code, field, message) => {
  this.ctx.status = code;
  throw [{ field, message }];
};

exports.range = (start, end) => {
  const _range = function* name(start, end) {
    let index = start;
    if (typeof end === 'undefined') {
      end = start;
      index = 0;
    }
    while (index < end) {
      yield index++;
    }
  };
  return Array.from(_range(start, end));
};
