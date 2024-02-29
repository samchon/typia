import typia from "typia";

import { _test_assertGuardEquals } from "../../../internal/_test_assertGuardEquals";
import { ConstantAtomicTagged } from "../../../structures/ConstantAtomicTagged";

export const test_assertGuardEquals_ConstantAtomicTagged =
  _test_assertGuardEquals("ConstantAtomicTagged")<ConstantAtomicTagged>(
    ConstantAtomicTagged,
  )((input) =>
    ((input: any): asserts input is ConstantAtomicTagged => {
      const __is = (
        input: any,
        _exceptionable: boolean = true,
      ): input is ConstantAtomicTagged => {
        const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
          ("latest" === input.id ||
            ("string" === typeof input.id &&
              /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
                input.id,
              ))) &&
          (-1 === input.age ||
            ("number" === typeof input.age &&
              Math.floor(input.age) === input.age &&
              0 <= input.age &&
              input.age <= 4294967295 &&
              input.age <= 100)) &&
          (2 === Object.keys(input).length ||
            Object.keys(input).every((key: any) => {
              if (["id", "age"].some((prop: any) => key === prop)) return true;
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
        ): input is ConstantAtomicTagged => {
          const $guard = (typia.assertGuardEquals as any).guard;
          const $join = (typia.assertGuardEquals as any).join;
          const $ao0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            ("latest" === input.id ||
              ("string" === typeof input.id &&
                (/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
                  input.id,
                ) ||
                  $guard(_exceptionable, {
                    path: _path + ".id",
                    expected: 'string & Format<"uuid">',
                    value: input.id,
                  }))) ||
              $guard(_exceptionable, {
                path: _path + ".id",
                expected: '("latest" | (string & Format<"uuid">))',
                value: input.id,
              })) &&
            (-1 === input.age ||
              ("number" === typeof input.age &&
                ((Math.floor(input.age) === input.age &&
                  0 <= input.age &&
                  input.age <= 4294967295) ||
                  $guard(_exceptionable, {
                    path: _path + ".age",
                    expected: 'number & Type<"uint32">',
                    value: input.age,
                  })) &&
                (input.age <= 100 ||
                  $guard(_exceptionable, {
                    path: _path + ".age",
                    expected: "number & Maximum<100>",
                    value: input.age,
                  }))) ||
              $guard(_exceptionable, {
                path: _path + ".age",
                expected: '((number & Type<"uint32"> & Maximum<100>) | -1)',
                value: input.age,
              })) &&
            (2 === Object.keys(input).length ||
              false === _exceptionable ||
              Object.keys(input).every((key: any) => {
                if (["id", "age"].some((prop: any) => key === prop))
                  return true;
                const value = input[key];
                if (undefined === value) return true;
                return $guard(_exceptionable, {
                  path: _path + $join(key),
                  expected: "undefined",
                  value: value,
                });
              }));
          return (
            ((("object" === typeof input && null !== input) ||
              $guard(true, {
                path: _path + "",
                expected: "ConstantAtomicTagged",
                value: input,
              })) &&
              $ao0(input, _path + "", true)) ||
            $guard(true, {
              path: _path + "",
              expected: "ConstantAtomicTagged",
              value: input,
            })
          );
        })(input, "$input", true);
    })(input),
  );
