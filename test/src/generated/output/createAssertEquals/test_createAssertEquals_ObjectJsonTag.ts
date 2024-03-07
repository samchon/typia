import typia from "typia";
import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { ObjectJsonTag } from "../../../structures/ObjectJsonTag";
import { TypeGuardError } from "typia";
export const test_createAssertEquals_ObjectJsonTag = _test_assertEquals(
  TypeGuardError,
)("ObjectJsonTag")<ObjectJsonTag>(ObjectJsonTag)(
  (
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): ObjectJsonTag => {
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
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is ObjectJsonTag => {
        const $guard = (typia.createAssertEquals as any).guard;
        const $join = (typia.createAssertEquals as any).join;
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ("string" === typeof input.vulnerable ||
            $guard(
              _exceptionable,
              {
                path: _path + ".vulnerable",
                expected: "string",
                value: input.vulnerable,
              },
              errorFactory,
            )) &&
          ("string" === typeof input.description ||
            $guard(
              _exceptionable,
              {
                path: _path + ".description",
                expected: "string",
                value: input.description,
              },
              errorFactory,
            )) &&
          ("string" === typeof input.title ||
            $guard(
              _exceptionable,
              {
                path: _path + ".title",
                expected: "string",
                value: input.title,
              },
              errorFactory,
            )) &&
          ("string" === typeof input.complicate_title ||
            $guard(
              _exceptionable,
              {
                path: _path + ".complicate_title",
                expected: "string",
                value: input.complicate_title,
              },
              errorFactory,
            )) &&
          (4 === Object.keys(input).length ||
            false === _exceptionable ||
            Object.keys(input).every((key: any) => {
              if (
                ["vulnerable", "description", "title", "complicate_title"].some(
                  (prop: any) => key === prop,
                )
              )
                return true;
              const value = input[key];
              if (undefined === value) return true;
              return $guard(
                _exceptionable,
                {
                  path: _path + $join(key),
                  expected: "undefined",
                  value: value,
                },
                errorFactory,
              );
            }));
        return (
          ((("object" === typeof input && null !== input) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "ObjectJsonTag",
                value: input,
              },
              errorFactory,
            )) &&
            $ao0(input, _path + "", true)) ||
          $guard(
            true,
            {
              path: _path + "",
              expected: "ObjectJsonTag",
              value: input,
            },
            errorFactory,
          )
        );
      })(input, "$input", true);
    return input;
  },
);
