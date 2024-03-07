import typia from "typia";
import { _test_functional_validateEqualsReturnAsync } from "../../../internal/_test_functional_validateEqualsReturnAsync";
import { CommentTagTypeBigInt } from "../../../structures/CommentTagTypeBigInt";
export const test_functional_validateEqualsReturnAsync_CommentTagTypeBigInt =
  _test_functional_validateEqualsReturnAsync("CommentTagTypeBigInt")(
    CommentTagTypeBigInt,
  )(
    (p: (input: CommentTagTypeBigInt) => Promise<CommentTagTypeBigInt>) =>
      async (
        input: CommentTagTypeBigInt,
      ): Promise<import("typia").IValidation<CommentTagTypeBigInt>> => {
        const result = ((
          input: any,
        ): typia.IValidation<CommentTagTypeBigInt> => {
          const errors = [] as any[];
          const __is = (
            input: any,
            _exceptionable: boolean = true,
          ): input is CommentTagTypeBigInt => {
            const $io0 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              "bigint" === typeof input.in64 &&
              "bigint" === typeof input.uint64 &&
              BigInt(0) <= input.uint64 &&
              (2 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (["in64", "uint64"].some((prop: any) => key === prop))
                    return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return false;
                }));
            return (
              "object" === typeof input && null !== input && $io0(input, true)
            );
          };
          if (false === __is(input)) {
            const $report = (
              typia.functional.validateEqualsReturn as any
            ).report(errors);
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is CommentTagTypeBigInt => {
              const $join = (typia.functional.validateEqualsReturn as any).join;
              const $vo0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
                  "bigint" === typeof input.in64 ||
                    $report(_exceptionable, {
                      path: _path + ".in64",
                      expected: "bigint",
                      value: input.in64,
                    }),
                  ("bigint" === typeof input.uint64 &&
                    (BigInt(0) <= input.uint64 ||
                      $report(_exceptionable, {
                        path: _path + ".uint64",
                        expected: 'bigint & Type<"uint64">',
                        value: input.uint64,
                      }))) ||
                    $report(_exceptionable, {
                      path: _path + ".uint64",
                      expected: '(bigint & Type<"uint64">)',
                      value: input.uint64,
                    }),
                  2 === Object.keys(input).length ||
                    false === _exceptionable ||
                    Object.keys(input)
                      .map((key: any) => {
                        if (
                          ["in64", "uint64"].some((prop: any) => key === prop)
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
                    expected: "CommentTagTypeBigInt",
                    value: input,
                  })) &&
                  $vo0(input, _path + "", true)) ||
                $report(true, {
                  path: _path + "",
                  expected: "CommentTagTypeBigInt",
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
        })(await p(input));
        if (!result.success)
          result.errors = result.errors.map((error: any) => ({
            ...error,
            path: error.path.replace("$input", "$input.return"),
          }));
        return result;
      },
  );
