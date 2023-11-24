import typia from "typia";

import { _test_misc_validatePrune } from "../../../internal/_test_misc_validatePrune";
import { TypeTagBigInt } from "../../../structures/TypeTagBigInt";

export const test_misc_createValidatePrune_TypeTagBigInt =
  _test_misc_validatePrune("TypeTagBigInt")<TypeTagBigInt>(TypeTagBigInt)(
    (input: any): typia.IValidation<TypeTagBigInt> => {
      const validate = (input: any): typia.IValidation<TypeTagBigInt> => {
        const errors = [] as any[];
        const __is = (input: any): input is TypeTagBigInt => {
          return (
            "object" === typeof input &&
            null !== input &&
            "bigint" === typeof (input as any).value &&
            "bigint" === typeof (input as any).ranged &&
            BigInt(0) <= (input as any).ranged &&
            (input as any).ranged <= BigInt(100) &&
            "bigint" === typeof (input as any).minimum &&
            BigInt(0) <= (input as any).minimum &&
            "bigint" === typeof (input as any).maximum &&
            (input as any).maximum <= BigInt(100) &&
            "bigint" === typeof (input as any).multipleOf &&
            (input as any).multipleOf % BigInt(3) === BigInt(0)
          );
        };
        if (false === __is(input)) {
          const $report = (typia.misc.createValidatePrune as any).report(
            errors,
          );
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is TypeTagBigInt => {
            const $vo0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                "bigint" === typeof input.value ||
                  $report(_exceptionable, {
                    path: _path + ".value",
                    expected: "bigint",
                    value: input.value,
                  }),
                ("bigint" === typeof input.ranged &&
                  (BigInt(0) <= input.ranged ||
                    $report(_exceptionable, {
                      path: _path + ".ranged",
                      expected: "bigint & Minimum<0n>",
                      value: input.ranged,
                    })) &&
                  (input.ranged <= BigInt(100) ||
                    $report(_exceptionable, {
                      path: _path + ".ranged",
                      expected: "bigint & Maximum<100n>",
                      value: input.ranged,
                    }))) ||
                  $report(_exceptionable, {
                    path: _path + ".ranged",
                    expected: "(bigint & Minimum<0n> & Maximum<100n>)",
                    value: input.ranged,
                  }),
                ("bigint" === typeof input.minimum &&
                  (BigInt(0) <= input.minimum ||
                    $report(_exceptionable, {
                      path: _path + ".minimum",
                      expected: "bigint & Minimum<0n>",
                      value: input.minimum,
                    }))) ||
                  $report(_exceptionable, {
                    path: _path + ".minimum",
                    expected: "(bigint & Minimum<0n>)",
                    value: input.minimum,
                  }),
                ("bigint" === typeof input.maximum &&
                  (input.maximum <= BigInt(100) ||
                    $report(_exceptionable, {
                      path: _path + ".maximum",
                      expected: "bigint & Maximum<100n>",
                      value: input.maximum,
                    }))) ||
                  $report(_exceptionable, {
                    path: _path + ".maximum",
                    expected: "(bigint & Maximum<100n>)",
                    value: input.maximum,
                  }),
                ("bigint" === typeof input.multipleOf &&
                  (input.multipleOf % BigInt(3) === BigInt(0) ||
                    $report(_exceptionable, {
                      path: _path + ".multipleOf",
                      expected: "bigint & MultipleOf<3n>",
                      value: input.multipleOf,
                    }))) ||
                  $report(_exceptionable, {
                    path: _path + ".multipleOf",
                    expected: "(bigint & MultipleOf<3n>)",
                    value: input.multipleOf,
                  }),
              ].every((flag: boolean) => flag);
            return (
              ((("object" === typeof input && null !== input) ||
                $report(true, {
                  path: _path + "",
                  expected: "TypeTagBigInt",
                  value: input,
                })) &&
                $vo0(input, _path + "", true)) ||
              $report(true, {
                path: _path + "",
                expected: "TypeTagBigInt",
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
      const prune = (input: TypeTagBigInt): void => {
        const $po0 = (input: any): any => {
          for (const key of Object.keys(input)) {
            if (
              "value" === key ||
              "ranged" === key ||
              "minimum" === key ||
              "maximum" === key ||
              "multipleOf" === key
            )
              continue;
            delete input[key];
          }
        };
        if ("object" === typeof input && null !== input) $po0(input);
      };
      const output = validate(input);
      if (output.success) prune(input);
      return output;
    },
  );
