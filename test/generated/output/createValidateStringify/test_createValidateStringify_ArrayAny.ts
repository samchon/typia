import typia from "../../../../src";
import { ArrayAny } from "../../../structures/ArrayAny";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_createValidateStringify_ArrayAny = _test_validateStringify(
    "ArrayAny",
    ArrayAny.generate,
    (input: ArrayAny): typia.IValidation<string> => {
        const validate = (input: any): typia.IValidation<ArrayAny> => {
            const errors = [] as any[];
            const $report = (typia.createValidateStringify as any).report(
                errors,
            );
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is ArrayAny => {
                const $vo0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    [
                        Array.isArray(input.anys) ||
                            $report(_exceptionable, {
                                path: _path + ".anys",
                                expected: "Array<any>",
                                value: input.anys,
                            }),
                        undefined === input.undefindable1 ||
                            Array.isArray(input.undefindable1) ||
                            $report(_exceptionable, {
                                path: _path + ".undefindable1",
                                expected: "(Array<any> | undefined)",
                                value: input.undefindable1,
                            }),
                        undefined === input.undefindable2 ||
                            Array.isArray(input.undefindable2) ||
                            $report(_exceptionable, {
                                path: _path + ".undefindable2",
                                expected: "(Array<any> | undefined)",
                                value: input.undefindable2,
                            }),
                        null === input.nullables1 ||
                            Array.isArray(input.nullables1) ||
                            $report(_exceptionable, {
                                path: _path + ".nullables1",
                                expected: "(Array<any> | null)",
                                value: input.nullables1,
                            }),
                        null === input.nullables2 ||
                            Array.isArray(input.nullables2) ||
                            $report(_exceptionable, {
                                path: _path + ".nullables2",
                                expected: "(Array<any> | null)",
                                value: input.nullables2,
                            }),
                        null === input.both1 ||
                            undefined === input.both1 ||
                            Array.isArray(input.both1) ||
                            $report(_exceptionable, {
                                path: _path + ".both1",
                                expected: "(Array<any> | null | undefined)",
                                value: input.both1,
                            }),
                        null === input.both2 ||
                            undefined === input.both2 ||
                            Array.isArray(input.both2) ||
                            $report(_exceptionable, {
                                path: _path + ".both2",
                                expected: "(Array<any> | null | undefined)",
                                value: input.both2,
                            }),
                        null === input.both3 ||
                            undefined === input.both3 ||
                            Array.isArray(input.both3) ||
                            $report(_exceptionable, {
                                path: _path + ".both3",
                                expected: "(Array<any> | null | undefined)",
                                value: input.both3,
                            }),
                        Array.isArray(input.union) ||
                            $report(_exceptionable, {
                                path: _path + ".union",
                                expected: "Array<any>",
                                value: input.union,
                            }),
                    ].every((flag: boolean) => flag);
                return (
                    ((("object" === typeof input && null !== input) ||
                        $report(true, {
                            path: _path + "",
                            expected: "Resolve<ArrayAny>",
                            value: input,
                        })) &&
                        $vo0(input, _path + "", true)) ||
                    $report(true, {
                        path: _path + "",
                        expected: "Resolve<ArrayAny>",
                        value: input,
                    })
                );
            })(input, "$input", true);
            const success = 0 === errors.length;
            return {
                success,
                errors,
                data: success ? input : undefined,
            } as any;
        };
        const stringify = (input: ArrayAny): string => {
            const $so0 = (input: any): any =>
                `{${
                    undefined === input.undefindable1
                        ? ""
                        : `"undefindable1":${
                              undefined !== input.undefindable1
                                  ? JSON.stringify(input.undefindable1)
                                  : undefined
                          },`
                }${
                    undefined === input.undefindable2
                        ? ""
                        : `"undefindable2":${
                              undefined !== input.undefindable2
                                  ? JSON.stringify(input.undefindable2)
                                  : undefined
                          },`
                }${
                    undefined === input.both1
                        ? ""
                        : `"both1":${
                              undefined !== input.both1
                                  ? null !== input.both1
                                      ? JSON.stringify(input.both1)
                                      : "null"
                                  : undefined
                          },`
                }${
                    undefined === input.both2
                        ? ""
                        : `"both2":${
                              undefined !== input.both2
                                  ? null !== input.both2
                                      ? JSON.stringify(input.both2)
                                      : "null"
                                  : undefined
                          },`
                }${
                    undefined === input.both3
                        ? ""
                        : `"both3":${
                              undefined !== input.both3
                                  ? null !== input.both3
                                      ? JSON.stringify(input.both3)
                                      : "null"
                                  : undefined
                          },`
                }"anys":${JSON.stringify(input.anys)},"nullables1":${
                    null !== input.nullables1
                        ? JSON.stringify(input.nullables1)
                        : "null"
                },"nullables2":${
                    null !== input.nullables2
                        ? JSON.stringify(input.nullables2)
                        : "null"
                },"union":${JSON.stringify(input.union)}}`;
            return $so0(input);
        };
        const output = validate(input) as any;
        if (output.success) output.data = stringify(input);
        return output;
    },
    ArrayAny.SPOILERS,
);
