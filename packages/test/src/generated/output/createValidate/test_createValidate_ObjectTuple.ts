import typia from "typia";

import { _test_validate } from "../../../internal/_test_validate";
import { ObjectTuple } from "../../../structures/ObjectTuple";

export const test_createValidate_ObjectTuple = _test_validate(
  "ObjectTuple",
)<ObjectTuple>(ObjectTuple)((input: any): typia.IValidation<ObjectTuple> => {
  const errors = [] as any[];
  const __is = (input: any): input is ObjectTuple => {
    const $io0 = (input: any): boolean =>
      "string" === typeof input.id &&
      "string" === typeof input.code &&
      "string" === typeof input.name;
    const $io1 = (input: any): boolean =>
      "string" === typeof input.id &&
      "string" === typeof input.mobile &&
      "string" === typeof input.name;
    return (
      Array.isArray(input) &&
      input.length === 2 &&
      "object" === typeof input[0] &&
      null !== input[0] &&
      $io0(input[0]) &&
      "object" === typeof input[1] &&
      null !== input[1] &&
      $io1(input[1])
    );
  };
  if (false === __is(input)) {
    const $report = (typia.createValidate as any).report(errors);
    ((
      input: any,
      _path: string,
      _exceptionable: boolean = true,
    ): input is ObjectTuple => {
      const $vo0 = (
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): boolean =>
        [
          "string" === typeof input.id ||
            $report(_exceptionable, {
              path: _path + ".id",
              expected: "string",
              value: input.id,
            }),
          "string" === typeof input.code ||
            $report(_exceptionable, {
              path: _path + ".code",
              expected: "string",
              value: input.code,
            }),
          "string" === typeof input.name ||
            $report(_exceptionable, {
              path: _path + ".name",
              expected: "string",
              value: input.name,
            }),
        ].every((flag: boolean) => flag);
      const $vo1 = (
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): boolean =>
        [
          "string" === typeof input.id ||
            $report(_exceptionable, {
              path: _path + ".id",
              expected: "string",
              value: input.id,
            }),
          "string" === typeof input.mobile ||
            $report(_exceptionable, {
              path: _path + ".mobile",
              expected: "string",
              value: input.mobile,
            }),
          "string" === typeof input.name ||
            $report(_exceptionable, {
              path: _path + ".name",
              expected: "string",
              value: input.name,
            }),
        ].every((flag: boolean) => flag);
      return (
        ((Array.isArray(input) ||
          $report(true, {
            path: _path + "",
            expected: "ObjectTuple",
            value: input,
          })) &&
          (input.length === 2 ||
            $report(true, {
              path: _path + "",
              expected: "[ObjectTuple.ISection, ObjectTuple.ICitizen]",
              value: input,
            })) &&
          [
            ((("object" === typeof input[0] && null !== input[0]) ||
              $report(true, {
                path: _path + "[0]",
                expected: "ObjectTuple.ISection",
                value: input[0],
              })) &&
              $vo0(input[0], _path + "[0]", true)) ||
              $report(true, {
                path: _path + "[0]",
                expected: "ObjectTuple.ISection",
                value: input[0],
              }),
            ((("object" === typeof input[1] && null !== input[1]) ||
              $report(true, {
                path: _path + "[1]",
                expected: "ObjectTuple.ICitizen",
                value: input[1],
              })) &&
              $vo1(input[1], _path + "[1]", true)) ||
              $report(true, {
                path: _path + "[1]",
                expected: "ObjectTuple.ICitizen",
                value: input[1],
              }),
          ].every((flag: boolean) => flag)) ||
        $report(true, {
          path: _path + "",
          expected: "ObjectTuple",
          value: input,
        })
      );
    })(input, "$input", true);
  }
  const success = 0 === errors.length;
  return {
    success,
    errors,
    data: success ? input : undefined,
  } as any;
});
