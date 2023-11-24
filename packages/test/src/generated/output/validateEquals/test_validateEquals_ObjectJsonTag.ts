import typia from "typia";

import { _test_validateEquals } from "../../../internal/_test_validateEquals";
import { ObjectJsonTag } from "../../../structures/ObjectJsonTag";

export const test_validateEquals_ObjectJsonTag = _test_validateEquals(
  "ObjectJsonTag",
)<ObjectJsonTag>(ObjectJsonTag)((input) =>
  ((input: any): typia.IValidation<ObjectJsonTag> => {
    const errors = [] as any[];
    const __is = (
      input: any,
      _exceptionable: boolean = true,
    ): input is ObjectJsonTag => {
      const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
        "string" === typeof input.vulnerable &&
        "string" === typeof input.description &&
        "string" === typeof input.title &&
        "string" === typeof input.complicate_title &&
        (4 === Object.keys(input).length ||
          Object.keys(input).every((key: any) => {
            if (
              ["vulnerable", "description", "title", "complicate_title"].some(
                (prop: any) => key === prop,
              )
            )
              return true;
            const value = input[key];
            if (undefined === value) return true;
            return false;
          }));
      return "object" === typeof input && null !== input && $io0(input, true);
    };
    if (false === __is(input)) {
      const $report = (typia.validateEquals as any).report(errors);
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is ObjectJsonTag => {
        const $join = (typia.validateEquals as any).join;
        const $vo0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          [
            "string" === typeof input.vulnerable ||
              $report(_exceptionable, {
                path: _path + ".vulnerable",
                expected: "string",
                value: input.vulnerable,
              }),
            "string" === typeof input.description ||
              $report(_exceptionable, {
                path: _path + ".description",
                expected: "string",
                value: input.description,
              }),
            "string" === typeof input.title ||
              $report(_exceptionable, {
                path: _path + ".title",
                expected: "string",
                value: input.title,
              }),
            "string" === typeof input.complicate_title ||
              $report(_exceptionable, {
                path: _path + ".complicate_title",
                expected: "string",
                value: input.complicate_title,
              }),
            4 === Object.keys(input).length ||
              false === _exceptionable ||
              Object.keys(input)
                .map((key: any) => {
                  if (
                    [
                      "vulnerable",
                      "description",
                      "title",
                      "complicate_title",
                    ].some((prop: any) => key === prop)
                  )
                    return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return $report(_exceptionable, {
                    path: _path + $join(key),
                    expected: "undefined",
                    value: value,
                  });
                })
                .every((flag: boolean) => flag),
          ].every((flag: boolean) => flag);
        return (
          ((("object" === typeof input && null !== input) ||
            $report(true, {
              path: _path + "",
              expected: "ObjectJsonTag",
              value: input,
            })) &&
            $vo0(input, _path + "", true)) ||
          $report(true, {
            path: _path + "",
            expected: "ObjectJsonTag",
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
  })(input),
);
