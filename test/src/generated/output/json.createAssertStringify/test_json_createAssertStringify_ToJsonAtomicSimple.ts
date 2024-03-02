import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../../internal/_test_json_assertStringify";
import { ToJsonAtomicSimple } from "../../../structures/ToJsonAtomicSimple";

export const test_json_createAssertStringify_ToJsonAtomicSimple =
  _test_json_assertStringify(TypeGuardError)(
    "ToJsonAtomicSimple",
  )<ToJsonAtomicSimple>(ToJsonAtomicSimple)(
    (
      input: any,
      errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
    ): string => {
      const assert = (
        input: any,
        errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
      ): ToJsonAtomicSimple => {
        const __is = (input: any): input is ToJsonAtomicSimple => {
          const $io0 = (input: any): boolean => true;
          const $io1 = (input: any): boolean => true;
          const $io2 = (input: any): boolean => true;
          return (
            Array.isArray(input) &&
            input.length === 3 &&
            "object" === typeof input[0] &&
            null !== input[0] &&
            $io0(input[0]) &&
            "object" === typeof input[1] &&
            null !== input[1] &&
            $io1(input[1]) &&
            "object" === typeof input[2] &&
            null !== input[2] &&
            $io2(input[2])
          );
        };
        if (false === __is(input))
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is ToJsonAtomicSimple => {
            const $guard = (typia.json.createAssertStringify as any).guard;
            const $ao0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              true ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".toJSON",
                  expected: "unknown",
                  value: input.toJSON,
                },
                errorFactory,
              );
            const $ao1 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              true ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".toJSON",
                  expected: "unknown",
                  value: input.toJSON,
                },
                errorFactory,
              );
            const $ao2 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              true ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".toJSON",
                  expected: "unknown",
                  value: input.toJSON,
                },
                errorFactory,
              );
            return (
              ((Array.isArray(input) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "ToJsonAtomicSimple",
                    value: input,
                  },
                  errorFactory,
                )) &&
                (input.length === 3 ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected:
                        "[ToJsonAtomicSimple.IToJson<boolean>, ToJsonAtomicSimple.IToJson<number>, ToJsonAtomicSimple.IToJson<string>]",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                (((("object" === typeof input[0] && null !== input[0]) ||
                  $guard(
                    true,
                    {
                      path: _path + "[0]",
                      expected: "ToJsonAtomicSimple.IToJson<boolean>",
                      value: input[0],
                    },
                    errorFactory,
                  )) &&
                  $ao0(input[0], _path + "[0]", true)) ||
                  $guard(
                    true,
                    {
                      path: _path + "[0]",
                      expected: "ToJsonAtomicSimple.IToJson<boolean>",
                      value: input[0],
                    },
                    errorFactory,
                  )) &&
                (((("object" === typeof input[1] && null !== input[1]) ||
                  $guard(
                    true,
                    {
                      path: _path + "[1]",
                      expected: "ToJsonAtomicSimple.IToJson<number>",
                      value: input[1],
                    },
                    errorFactory,
                  )) &&
                  $ao1(input[1], _path + "[1]", true)) ||
                  $guard(
                    true,
                    {
                      path: _path + "[1]",
                      expected: "ToJsonAtomicSimple.IToJson<number>",
                      value: input[1],
                    },
                    errorFactory,
                  )) &&
                (((("object" === typeof input[2] && null !== input[2]) ||
                  $guard(
                    true,
                    {
                      path: _path + "[2]",
                      expected: "ToJsonAtomicSimple.IToJson<string>",
                      value: input[2],
                    },
                    errorFactory,
                  )) &&
                  $ao2(input[2], _path + "[2]", true)) ||
                  $guard(
                    true,
                    {
                      path: _path + "[2]",
                      expected: "ToJsonAtomicSimple.IToJson<string>",
                      value: input[2],
                    },
                    errorFactory,
                  ))) ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected: "ToJsonAtomicSimple",
                  value: input,
                },
                errorFactory,
              )
            );
          })(input, "$input", true);
        return input;
      };
      const stringify = (input: ToJsonAtomicSimple): string => {
        const $number = (typia.json.createAssertStringify as any).number;
        const $string = (typia.json.createAssertStringify as any).string;
        return `[${input[0].toJSON()},${$number(input[1].toJSON())},${$string(
          input[2].toJSON(),
        )}]`;
      };
      return stringify(assert(input, errorFactory));
    },
  );
