import typia from "typia";
import { _test_functional_validateEqualsReturnAsync } from "../../../internal/_test_functional_validateEqualsReturnAsync";
import { ConstantAtomicTagged } from "../../../structures/ConstantAtomicTagged";
export const test_functional_validateEqualsReturnAsync_ConstantAtomicTagged =
  _test_functional_validateEqualsReturnAsync("ConstantAtomicTagged")(
    ConstantAtomicTagged,
  )(
    (p: (input: ConstantAtomicTagged) => Promise<ConstantAtomicTagged>) =>
      async (
        input: ConstantAtomicTagged,
      ): Promise<import("typia").IValidation<ConstantAtomicTagged>> => {
        const result = ((
          input: any,
        ): typia.IValidation<ConstantAtomicTagged> => {
          const errors = [] as any[];
          const __is = (
            input: any,
            _exceptionable: boolean = true,
          ): input is ConstantAtomicTagged => {
            const $io0 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
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
                  if (["id", "age"].some((prop: any) => key === prop))
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
            ): input is ConstantAtomicTagged => {
              const $join = (typia.functional.validateEqualsReturn as any).join;
              const $vo0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
                  "latest" === input.id ||
                    ("string" === typeof input.id &&
                      (/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
                        input.id,
                      ) ||
                        $report(_exceptionable, {
                          path: _path + ".id",
                          expected: 'string & Format<"uuid">',
                          value: input.id,
                        }))) ||
                    $report(_exceptionable, {
                      path: _path + ".id",
                      expected: '("latest" | (string & Format<"uuid">))',
                      value: input.id,
                    }),
                  -1 === input.age ||
                    ("number" === typeof input.age &&
                      ((Math.floor(input.age) === input.age &&
                        0 <= input.age &&
                        input.age <= 4294967295) ||
                        $report(_exceptionable, {
                          path: _path + ".age",
                          expected: 'number & Type<"uint32">',
                          value: input.age,
                        })) &&
                      (input.age <= 100 ||
                        $report(_exceptionable, {
                          path: _path + ".age",
                          expected: "number & Maximum<100>",
                          value: input.age,
                        }))) ||
                    $report(_exceptionable, {
                      path: _path + ".age",
                      expected:
                        '((number & Type<"uint32"> & Maximum<100>) | -1)',
                      value: input.age,
                    }),
                  2 === Object.keys(input).length ||
                    false === _exceptionable ||
                    Object.keys(input)
                      .map((key: any) => {
                        if (["id", "age"].some((prop: any) => key === prop))
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
                    expected: "ConstantAtomicTagged",
                    value: input,
                  })) &&
                  $vo0(input, _path + "", true)) ||
                $report(true, {
                  path: _path + "",
                  expected: "ConstantAtomicTagged",
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
