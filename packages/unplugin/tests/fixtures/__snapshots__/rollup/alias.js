// alias.js
import * as __typia_transform__createStandardSchema from 'typia/lib/internal/_createStandardSchema.js';

const random = /* @__PURE__ */ (() => {
  let _generator;
  return (generator) => {
    _generator = generator;
    return "any type used...";
  };
})();
const validate = (() => {
  return __typia_transform__createStandardSchema._createStandardSchema((input) => {
    return {
      success: true,
      data: input
    };
  });
})();
validate({});
random();
