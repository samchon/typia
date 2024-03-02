import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../../internal/_test_json_assertStringify";
import { ConstantAtomicTagged } from "../../../structures/ConstantAtomicTagged";

export const test_json_createAssertStringify_ConstantAtomicTagged =
  _test_json_assertStringify(TypeGuardError)(
    "ConstantAtomicTagged",
  )<ConstantAtomicTagged>(ConstantAtomicTagged)(
    (
      input: any,
      errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
    ): string => {
      const assert = (
        input: any,
        errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
      ): ConstantAtomicTagged => {
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
            const $guard = (typia.json.createAssertStringify as any).guard;
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
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".id",
                        expected: 'string & Format<"uuid">',
                        value: input.id,
                      },
                      errorFactory,
                    ))) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".id",
                    expected: '("latest" | (string & Format<"uuid">))',
                    value: input.id,
                  },
                  errorFactory,
                )) &&
              (-1 === input.age ||
                ("number" === typeof input.age &&
                  ((Math.floor(input.age) === input.age &&
                    0 <= input.age &&
                    input.age <= 4294967295) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".age",
                        expected: 'number & Type<"uint32">',
                        value: input.age,
                      },
                      errorFactory,
                    )) &&
                  (input.age <= 100 ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".age",
                        expected: "number & Maximum<100>",
                        value: input.age,
                      },
                      errorFactory,
                    ))) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".age",
                    expected: '((number & Type<"uint32"> & Maximum<100>) | -1)',
                    value: input.age,
                  },
                  errorFactory,
                ));
            return (
              ((("object" === typeof input && null !== input) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "ConstantAtomicTagged",
                    value: input,
                  },
                  errorFactory,
                )) &&
                $ao0(input, _path + "", true)) ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected: "ConstantAtomicTagged",
                  value: input,
                },
                errorFactory,
              )
            );
          })(input, "$input", true);
        return input;
      };
      const stringify = (input: ConstantAtomicTagged): string => {
        const $string = (typia.json.createAssertStringify as any).string;
        const $throws = (typia.json.createAssertStringify as any).throws;
        const $number = (typia.json.createAssertStringify as any).number;
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
      return stringify(assert(input, errorFactory));
    },
  );
