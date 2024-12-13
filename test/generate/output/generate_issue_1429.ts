import typia from "typia";
import * as __typia_transform__validateReport from "typia/lib/internal/_validateReport.js";

type Person = {
  name: string;
  age: number;
};
export const validateParsePerson = (() => {
  const _io0 = (input: any): boolean =>
    "string" === typeof input.name &&
    "number" === typeof input.age &&
    Number.isFinite(input.age);
  const _vo0 = (
    input: any,
    _path: string,
    _exceptionable: boolean = true,
  ): boolean =>
    [
      "string" === typeof input.name ||
        _report(_exceptionable, {
          path: _path + ".name",
          expected: "string",
          value: input.name,
        }),
      ("number" === typeof input.age && Number.isFinite(input.age)) ||
        _report(_exceptionable, {
          path: _path + ".age",
          expected: "number",
          value: input.age,
        }),
    ].every((flag: boolean) => flag);
  const __is = (input: any): input is Person =>
    "object" === typeof input && null !== input && _io0(input);
  let errors: any;
  let _report: any;
  const __validate = (input: any): import("typia").IValidation<Person> => {
    if (false === __is(input)) {
      errors = [];
      _report = (__typia_transform__validateReport._validateReport as any)(
        errors,
      );
      ((input: any, _path: string, _exceptionable: boolean = true) =>
        ((("object" === typeof input && null !== input) ||
          _report(true, {
            path: _path + "",
            expected: "Person",
            value: input,
          })) &&
          _vo0(input, _path + "", true)) ||
        _report(true, {
          path: _path + "",
          expected: "Person",
          value: input,
        }))(input, "$input", true);
      const success = 0 === errors.length;
      return success
        ? {
            success,
            data: input,
          }
        : ({
            success,
            errors,
            data: input,
          } as any);
    }
    return {
      success: true,
      data: input,
    } as any;
  };
  return (
    input: string,
  ): import("typia").IValidation<import("typia").Primitive<Person>> =>
    __validate(JSON.parse(input)) as any;
})();
