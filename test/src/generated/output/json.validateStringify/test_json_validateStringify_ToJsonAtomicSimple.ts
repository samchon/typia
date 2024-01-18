import typia from "typia";

import { _test_json_validateStringify } from "../../../internal/_test_json_validateStringify";
import { ToJsonAtomicSimple } from "../../../structures/ToJsonAtomicSimple";

export const test_json_validateStringify_ToJsonAtomicSimple =
  _test_json_validateStringify("ToJsonAtomicSimple")<ToJsonAtomicSimple>(
    ToJsonAtomicSimple,
  )((input) =>
    ((input: ToJsonAtomicSimple): typia.IValidation<string> => {
      const validate = (input: any): typia.IValidation<ToJsonAtomicSimple> => {
        const errors = [] as any[];
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
        if (false === __is(input)) {
          const $report = require("typia/lib/functional/$report").$report(
            errors,
          );
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is ToJsonAtomicSimple => {
            const $vo0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                true ||
                  $report(_exceptionable, {
                    path: _path + ".toJSON",
                    expected: "unknown",
                    value: input.toJSON,
                  }),
              ].every((flag: boolean) => flag);
            const $vo1 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                true ||
                  $report(_exceptionable, {
                    path: _path + ".toJSON",
                    expected: "unknown",
                    value: input.toJSON,
                  }),
              ].every((flag: boolean) => flag);
            const $vo2 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                true ||
                  $report(_exceptionable, {
                    path: _path + ".toJSON",
                    expected: "unknown",
                    value: input.toJSON,
                  }),
              ].every((flag: boolean) => flag);
            return (
              ((Array.isArray(input) ||
                $report(true, {
                  path: _path + "",
                  expected: "ToJsonAtomicSimple",
                  value: input,
                })) &&
                (input.length === 3 ||
                  $report(true, {
                    path: _path + "",
                    expected:
                      "[ToJsonAtomicSimple.IToJson<boolean>, ToJsonAtomicSimple.IToJson<number>, ToJsonAtomicSimple.IToJson<string>]",
                    value: input,
                  })) &&
                [
                  ((("object" === typeof input[0] && null !== input[0]) ||
                    $report(true, {
                      path: _path + "[0]",
                      expected: "ToJsonAtomicSimple.IToJson<boolean>",
                      value: input[0],
                    })) &&
                    $vo0(input[0], _path + "[0]", true)) ||
                    $report(true, {
                      path: _path + "[0]",
                      expected: "ToJsonAtomicSimple.IToJson<boolean>",
                      value: input[0],
                    }),
                  ((("object" === typeof input[1] && null !== input[1]) ||
                    $report(true, {
                      path: _path + "[1]",
                      expected: "ToJsonAtomicSimple.IToJson<number>",
                      value: input[1],
                    })) &&
                    $vo1(input[1], _path + "[1]", true)) ||
                    $report(true, {
                      path: _path + "[1]",
                      expected: "ToJsonAtomicSimple.IToJson<number>",
                      value: input[1],
                    }),
                  ((("object" === typeof input[2] && null !== input[2]) ||
                    $report(true, {
                      path: _path + "[2]",
                      expected: "ToJsonAtomicSimple.IToJson<string>",
                      value: input[2],
                    })) &&
                    $vo2(input[2], _path + "[2]", true)) ||
                    $report(true, {
                      path: _path + "[2]",
                      expected: "ToJsonAtomicSimple.IToJson<string>",
                      value: input[2],
                    }),
                ].every((flag: boolean) => flag)) ||
              $report(true, {
                path: _path + "",
                expected: "ToJsonAtomicSimple",
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
      };
      const stringify = (input: ToJsonAtomicSimple): string => {
        // @ts-ignore;
        declare const require: (lib: string) => any;
        const $number = require("typia/lib/functional/$number").$number;
        const $string = require("typia/lib/functional/$string").$string;
        return `[${input[0].toJSON()},${$number(input[1].toJSON())},${$string(
          input[2].toJSON(),
        )}]`;
      };
      const output = validate(input) as any;
      if (output.success) output.data = stringify(input);
      return output;
    })(input),
  );
