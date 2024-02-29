import typia from "typia";

import { _test_json_assertStringify } from "../../../internal/_test_json_assertStringify";
import { ConstantAtomicTagged } from "../../../structures/ConstantAtomicTagged";

export const test_json_assertStringify_ConstantAtomicTagged =
  _test_json_assertStringify("ConstantAtomicTagged")<ConstantAtomicTagged>(
    ConstantAtomicTagged,
  )((input) =>
    ((input: any): string => {
      const assert = (input: any): ConstantAtomicTagged => {
        const __is = (input: any): input is ConstantAtomicTagged => {
          const $io0 = (input: any): boolean =>
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
                input.age <= 100));
          return "object" === typeof input && null !== input && $io0(input);
        };
        if (false === __is(input))
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is ConstantAtomicTagged => {
            const $guard = (typia.json.assertStringify as any).guard;
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
        return input;
      };
      const stringify = (input: ConstantAtomicTagged): string => {
        const $string = (typia.json.assertStringify as any).string;
        const $throws = (typia.json.assertStringify as any).throws;
        const $number = (typia.json.assertStringify as any).number;
        const $so0 = (input: any): any =>
          `{"id":${(() => {
            if ("string" === typeof input.id) return $string(input.id);
            if ("string" === typeof input.id) return '"' + input.id + '"';
            if (
              "string" === typeof input.id &&
              /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
                input.id,
              )
            )
              return $string(input.id);
            $throws({
              expected: '("latest" | (string & Format<"uuid">))',
              value: input.id,
            });
          })()},"age":${(() => {
            if ("number" === typeof input.age) return $number(input.age);
            if (
              "number" === typeof input.age &&
              Math.floor(input.age) === input.age &&
              0 <= input.age &&
              input.age <= 4294967295 &&
              input.age <= 100
            )
              return $number(input.age);
            $throws({
              expected: '((number & Type<"uint32"> & Maximum<100>) | -1)',
              value: input.age,
            });
          })()}}`;
        return $so0(input);
      };
      return stringify(assert(input));
    })(input),
  );
