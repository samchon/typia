import typia from "typia";
import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { ClassGetter } from "../../../structures/ClassGetter";
import { TypeGuardError } from "typia";
export const test_createAssertEquals_ClassGetter = _test_assertEquals(
  TypeGuardError,
)("ClassGetter")<ClassGetter>(ClassGetter)(
  (
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): ClassGetter => {
    const __is = (
      input: any,
      _exceptionable: boolean = true,
    ): input is ClassGetter => {
      const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
        "string" === typeof input.id &&
        "string" === typeof input.name &&
        (null === input.dead || "boolean" === typeof input.dead) &&
        (3 === Object.keys(input).length ||
          Object.keys(input).every((key: any) => {
            if (["id", "name", "dead"].some((prop: any) => key === prop))
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
      ): input is ClassGetter => {
        const $guard = (typia.createAssertEquals as any).guard;
        const $join = (typia.createAssertEquals as any).join;
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ("string" === typeof input.id ||
            $guard(
              _exceptionable,
              {
                path: _path + ".id",
                expected: "string",
                value: input.id,
              },
              errorFactory,
            )) &&
          ("string" === typeof input.name ||
            $guard(
              _exceptionable,
              {
                path: _path + ".name",
                expected: "string",
                value: input.name,
              },
              errorFactory,
            )) &&
          (null === input.dead ||
            "boolean" === typeof input.dead ||
            $guard(
              _exceptionable,
              {
                path: _path + ".dead",
                expected: "(boolean | null)",
                value: input.dead,
              },
              errorFactory,
            )) &&
          (3 === Object.keys(input).length ||
            false === _exceptionable ||
            Object.keys(input).every((key: any) => {
              if (["id", "name", "dead"].some((prop: any) => key === prop))
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
                expected: "ClassGetter.Person",
                value: input,
              },
              errorFactory,
            )) &&
            $ao0(input, _path + "", true)) ||
          $guard(
            true,
            {
              path: _path + "",
              expected: "ClassGetter.Person",
              value: input,
            },
            errorFactory,
          )
        );
      })(input, "$input", true);
    return input;
  },
);
