// validate.js
import * as __typia_transform__isFormatEmail from 'typia/lib/internal/_isFormatEmail.js';
import * as __typia_transform__isFormatUuid from 'typia/lib/internal/_isFormatUuid.js';
import * as __typia_transform__isTypeUint32 from 'typia/lib/internal/_isTypeUint32.js';
import * as __typia_transform__validateReport from 'typia/lib/internal/_validateReport.js';
import * as __typia_transform__createStandardSchema from 'typia/lib/internal/_createStandardSchema.js';

const validate = (() => {
  const _io0 = (input) => "string" === typeof input.email && __typia_transform__isFormatEmail._isFormatEmail(input.email) && ("string" === typeof input.id && __typia_transform__isFormatUuid._isFormatUuid(input.id)) && ("number" === typeof input.age && (__typia_transform__isTypeUint32._isTypeUint32(input.age) && 19 < input.age && input.age <= 100));
  const _vo0 = (input, _path, _exceptionable = true) => ["string" === typeof input.email && (__typia_transform__isFormatEmail._isFormatEmail(input.email) || _report(_exceptionable, {
    path: _path + ".email",
    expected: 'string & Format<"email">',
    value: input.email
  })) || _report(_exceptionable, {
    path: _path + ".email",
    expected: '(string & Format<"email">)',
    value: input.email
  }), "string" === typeof input.id && (__typia_transform__isFormatUuid._isFormatUuid(input.id) || _report(_exceptionable, {
    path: _path + ".id",
    expected: 'string & Format<"uuid">',
    value: input.id
  })) || _report(_exceptionable, {
    path: _path + ".id",
    expected: '(string & Format<"uuid">)',
    value: input.id
  }), "number" === typeof input.age && (__typia_transform__isTypeUint32._isTypeUint32(input.age) || _report(_exceptionable, {
    path: _path + ".age",
    expected: 'number & Type<"uint32">',
    value: input.age
  })) && (19 < input.age || _report(_exceptionable, {
    path: _path + ".age",
    expected: "number & ExclusiveMinimum<19>",
    value: input.age
  })) && (input.age <= 100 || _report(_exceptionable, {
    path: _path + ".age",
    expected: "number & Maximum<100>",
    value: input.age
  })) || _report(_exceptionable, {
    path: _path + ".age",
    expected: '(number & Type<"uint32"> & ExclusiveMinimum<19> & Maximum<100>)',
    value: input.age
  })].every((flag) => flag);
  const __is = (input) => "object" === typeof input && null !== input && _io0(input);
  let errors;
  let _report;
  return __typia_transform__createStandardSchema._createStandardSchema((input) => {
    if (false === __is(input)) {
      errors = [];
      _report = __typia_transform__validateReport._validateReport(errors);
      ((input2, _path, _exceptionable = true) => ("object" === typeof input2 && null !== input2 || _report(true, {
        path: _path + "",
        expected: "IMember",
        value: input2
      })) && _vo0(input2, _path + "", true) || _report(true, {
        path: _path + "",
        expected: "IMember",
        value: input2
      }))(input, "$input", true);
      const success = 0 === errors.length;
      return success ? {
        success,
        data: input
      } : {
        success,
        errors,
        data: input
      };
    }
    return {
      success: true,
      data: input
    };
  });
})();
validate({});
