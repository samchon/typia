import typia from "../../../../src";
import { _test_validateStringify } from "../../../internal/_test_validateStringify";
import { ArrayRepeatedNullable } from "../../../structures/ArrayRepeatedNullable";

export const test_validateStringify_ArrayRepeatedNullable =
    _test_validateStringify(
        "ArrayRepeatedNullable",
        ArrayRepeatedNullable.generate,
        (input) =>
            ((
                input: string | number | Array<ArrayRepeatedNullable> | null,
            ): typia.IValidation<string> => {
                const validate: any = (
                    input: any,
                ): typia.IValidation<
                    string | number | Array<ArrayRepeatedNullable> | null
                > => {
                    const __is: any = (
                        input: any,
                    ): input is
                        | string
                        | number
                        | Array<ArrayRepeatedNullable>
                        | null => {
                        const $ia0: any = (input: any): any =>
                            input.every(
                                (elem: any) =>
                                    undefined !== elem &&
                                    (null === elem ||
                                        "string" === typeof elem ||
                                        ("number" === typeof elem &&
                                            Number.isFinite(elem)) ||
                                        (Array.isArray(elem) && $ia0(elem))),
                            );
                        return (
                            undefined !== input &&
                            (null === input ||
                                "string" === typeof input ||
                                ("number" === typeof input &&
                                    Number.isFinite(input)) ||
                                (Array.isArray(input) && $ia0(input)))
                        );
                    };
                    const errors: any = [] as any[];
                    const $report: any = (
                        typia.validateStringify as any
                    ).report(errors);
                    if (false === __is(input))
                        ((
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): input is
                            | string
                            | number
                            | Array<ArrayRepeatedNullable>
                            | null => {
                            const $va0: any = (
                                input: any,
                                _path: string,
                                _exceptionable: boolean = true,
                            ): any =>
                                input
                                    .map(
                                        (elem: any, _index1: number) =>
                                            (undefined !== elem ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        "[" +
                                                        _index1 +
                                                        "]",
                                                    expected:
                                                        "(Array<ArrayRepeatedNullable> | null | number | string)",
                                                    value: elem,
                                                })) &&
                                            (null === elem ||
                                                "string" === typeof elem ||
                                                ("number" === typeof elem &&
                                                    Number.isFinite(elem)) ||
                                                ((Array.isArray(elem) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            "[" +
                                                            _index1 +
                                                            "]",
                                                        expected:
                                                            "(Array<ArrayRepeatedNullable> | null | number | string)",
                                                        value: elem,
                                                    })) &&
                                                    $va0(
                                                        elem,
                                                        _path,
                                                        true && _exceptionable,
                                                    )) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        "[" +
                                                        _index1 +
                                                        "]",
                                                    expected:
                                                        "(Array<ArrayRepeatedNullable> | null | number | string)",
                                                    value: elem,
                                                })),
                                    )
                                    .every((flag: boolean) => flag);
                            return (
                                (undefined !== input ||
                                    $report(true, {
                                        path: _path + "",
                                        expected:
                                            "(Array<ArrayRepeatedNullable> | null | number | string)",
                                        value: input,
                                    })) &&
                                (null === input ||
                                    "string" === typeof input ||
                                    ("number" === typeof input &&
                                        Number.isFinite(input)) ||
                                    ((Array.isArray(input) ||
                                        $report(true, {
                                            path: _path + "",
                                            expected:
                                                "(Array<ArrayRepeatedNullable> | null | number | string)",
                                            value: input,
                                        })) &&
                                        $va0(
                                            input,
                                            _path,
                                            true && _exceptionable,
                                        )) ||
                                    $report(true, {
                                        path: _path + "",
                                        expected:
                                            "(Array<ArrayRepeatedNullable> | null | number | string)",
                                        value: input,
                                    }))
                            );
                        })(input, "$input", true);
                    const success: any = 0 === errors.length;
                    return {
                        success,
                        errors,
                        data: success ? input : undefined,
                    } as any;
                };
                const stringify: any = (
                    input:
                        | string
                        | number
                        | Array<ArrayRepeatedNullable>
                        | null,
                ): string => {
                    const $ia0: any = (input: any): any =>
                        input.every(
                            (elem: any) =>
                                undefined !== elem &&
                                (null === elem ||
                                    "string" === typeof elem ||
                                    "number" === typeof elem ||
                                    (Array.isArray(elem) && $ia0(elem))),
                        );
                    const $string: any = (typia.validateStringify as any)
                        .string;
                    const $number: any = (typia.validateStringify as any)
                        .number;
                    const $throws: any = (typia.validateStringify as any)
                        .throws;
                    const $sp0: any = (input: any) => $sa0(input);
                    const $sa0: any = (input: any): any =>
                        `[${input
                            .map((elem: any) =>
                                null !== elem
                                    ? (() => {
                                          if ("string" === typeof elem)
                                              return $string(elem);
                                          if ("number" === typeof elem)
                                              return $number(elem);
                                          if (Array.isArray(elem))
                                              return $sp0(elem);
                                          $throws({
                                              expected:
                                                  "(Array<ArrayRepeatedNullable> | null | number | string)",
                                              value: elem,
                                          });
                                      })()
                                    : "null",
                            )
                            .join(",")}]`;
                    return null !== input
                        ? (() => {
                              if ("string" === typeof input)
                                  return $string(input);
                              if ("number" === typeof input)
                                  return $number(input).toString();
                              if (Array.isArray(input)) return $sp0(input);
                              $throws({
                                  expected:
                                      "(Array<ArrayRepeatedNullable> | null | number | string)",
                                  value: input,
                              });
                          })()
                        : "null";
                };
                const output: any = validate(input) as any;
                if (output.success) output.data = stringify(input);
                return output;
            })(input),
        ArrayRepeatedNullable.SPOILERS,
    );
