import typia from "../../../../src";
import { _test_json_validateStringify } from "../../../internal/_test_json_validateStringify";
import { TypeTagType } from "../../../structures/TypeTagType";

export const test_json_createValidateStringify_TypeTagType =
    _test_json_validateStringify("TypeTagType")<TypeTagType>(TypeTagType)(
        (input: TypeTagType): typia.IValidation<string> => {
            const validate = (input: any): typia.IValidation<TypeTagType> => {
                const errors = [] as any[];
                const __is = (input: any): input is TypeTagType => {
                    const $io0 = (input: any): boolean =>
                        Array.isArray(input.value) &&
                        input.value.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io1(elem),
                        );
                    const $io1 = (input: any): boolean =>
                        "number" === typeof input.int &&
                        Math.floor(input.int) === input.int &&
                        -2147483648 <= input.int &&
                        input.int <= 2147483647 &&
                        "number" === typeof input.uint &&
                        Math.floor(input.uint) === input.uint &&
                        0 <= input.uint &&
                        input.uint <= 4294967295 &&
                        "number" === typeof input.int32 &&
                        Math.floor(input.int32) === input.int32 &&
                        -2147483648 <= input.int32 &&
                        input.int32 <= 2147483647 &&
                        "number" === typeof input.uint32 &&
                        Math.floor(input.uint32) === input.uint32 &&
                        0 <= input.uint32 &&
                        input.uint32 <= 4294967295 &&
                        "number" === typeof input.int64 &&
                        Math.floor(input.int64) === input.int64 &&
                        -9223372036854776000 <= input.int64 &&
                        input.int64 <= 9223372036854776000 &&
                        "number" === typeof input.uint64 &&
                        Math.floor(input.uint64) === input.uint64 &&
                        0 <= input.uint64 &&
                        input.uint64 <= 18446744073709552000 &&
                        "number" === typeof input.float &&
                        -1.175494351e38 <= input.float &&
                        input.float <= 3.4028235e38;
                    return (
                        "object" === typeof input &&
                        null !== input &&
                        $io0(input)
                    );
                };
                if (false === __is(input)) {
                    const $report = (
                        typia.json.createValidateStringify as any
                    ).report(errors);
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is TypeTagType => {
                        const $vo0 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                ((Array.isArray(input.value) ||
                                    $report(_exceptionable, {
                                        path: _path + ".value",
                                        expected: "Array<TypeTagType.Type>",
                                        value: input.value,
                                    })) &&
                                    input.value
                                        .map(
                                            (elem: any, _index1: number) =>
                                                ((("object" === typeof elem &&
                                                    null !== elem) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            ".value[" +
                                                            _index1 +
                                                            "]",
                                                        expected:
                                                            "TypeTagType.Type",
                                                        value: elem,
                                                    })) &&
                                                    $vo1(
                                                        elem,
                                                        _path +
                                                            ".value[" +
                                                            _index1 +
                                                            "]",
                                                        true && _exceptionable,
                                                    )) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".value[" +
                                                        _index1 +
                                                        "]",
                                                    expected:
                                                        "TypeTagType.Type",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".value",
                                        expected: "Array<TypeTagType.Type>",
                                        value: input.value,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo1 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                ("number" === typeof input.int &&
                                    ((Math.floor(input.int) === input.int &&
                                        -2147483648 <= input.int &&
                                        input.int <= 2147483647) ||
                                        $report(_exceptionable, {
                                            path: _path + ".int",
                                            expected: 'number & Type<"int32">',
                                            value: input.int,
                                        }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".int",
                                        expected: '(number & Type<"int32">)',
                                        value: input.int,
                                    }),
                                ("number" === typeof input.uint &&
                                    ((Math.floor(input.uint) === input.uint &&
                                        0 <= input.uint &&
                                        input.uint <= 4294967295) ||
                                        $report(_exceptionable, {
                                            path: _path + ".uint",
                                            expected: 'number & Type<"uint32">',
                                            value: input.uint,
                                        }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".uint",
                                        expected: '(number & Type<"uint32">)',
                                        value: input.uint,
                                    }),
                                ("number" === typeof input.int32 &&
                                    ((Math.floor(input.int32) === input.int32 &&
                                        -2147483648 <= input.int32 &&
                                        input.int32 <= 2147483647) ||
                                        $report(_exceptionable, {
                                            path: _path + ".int32",
                                            expected: 'number & Type<"int32">',
                                            value: input.int32,
                                        }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".int32",
                                        expected: '(number & Type<"int32">)',
                                        value: input.int32,
                                    }),
                                ("number" === typeof input.uint32 &&
                                    ((Math.floor(input.uint32) ===
                                        input.uint32 &&
                                        0 <= input.uint32 &&
                                        input.uint32 <= 4294967295) ||
                                        $report(_exceptionable, {
                                            path: _path + ".uint32",
                                            expected: 'number & Type<"uint32">',
                                            value: input.uint32,
                                        }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".uint32",
                                        expected: '(number & Type<"uint32">)',
                                        value: input.uint32,
                                    }),
                                ("number" === typeof input.int64 &&
                                    ((Math.floor(input.int64) === input.int64 &&
                                        -9223372036854776000 <= input.int64 &&
                                        input.int64 <= 9223372036854776000) ||
                                        $report(_exceptionable, {
                                            path: _path + ".int64",
                                            expected: 'number & Type<"int64">',
                                            value: input.int64,
                                        }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".int64",
                                        expected: '(number & Type<"int64">)',
                                        value: input.int64,
                                    }),
                                ("number" === typeof input.uint64 &&
                                    ((Math.floor(input.uint64) ===
                                        input.uint64 &&
                                        0 <= input.uint64 &&
                                        input.uint64 <= 18446744073709552000) ||
                                        $report(_exceptionable, {
                                            path: _path + ".uint64",
                                            expected: 'number & Type<"uint64">',
                                            value: input.uint64,
                                        }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".uint64",
                                        expected: '(number & Type<"uint64">)',
                                        value: input.uint64,
                                    }),
                                ("number" === typeof input.float &&
                                    ((-1.175494351e38 <= input.float &&
                                        input.float <= 3.4028235e38) ||
                                        $report(_exceptionable, {
                                            path: _path + ".float",
                                            expected: 'number & Type<"float">',
                                            value: input.float,
                                        }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".float",
                                        expected: '(number & Type<"float">)',
                                        value: input.float,
                                    }),
                            ].every((flag: boolean) => flag);
                        return (
                            ((("object" === typeof input && null !== input) ||
                                $report(true, {
                                    path: _path + "",
                                    expected: "TypeTagType",
                                    value: input,
                                })) &&
                                $vo0(input, _path + "", true)) ||
                            $report(true, {
                                path: _path + "",
                                expected: "TypeTagType",
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
            const stringify = (input: TypeTagType): string => {
                const $io1 = (input: any): boolean =>
                    "number" === typeof input.int &&
                    Math.floor(input.int) === input.int &&
                    -2147483648 <= input.int &&
                    input.int <= 2147483647 &&
                    "number" === typeof input.uint &&
                    Math.floor(input.uint) === input.uint &&
                    0 <= input.uint &&
                    input.uint <= 4294967295 &&
                    "number" === typeof input.int32 &&
                    Math.floor(input.int32) === input.int32 &&
                    -2147483648 <= input.int32 &&
                    input.int32 <= 2147483647 &&
                    "number" === typeof input.uint32 &&
                    Math.floor(input.uint32) === input.uint32 &&
                    0 <= input.uint32 &&
                    input.uint32 <= 4294967295 &&
                    "number" === typeof input.int64 &&
                    Math.floor(input.int64) === input.int64 &&
                    -9223372036854776000 <= input.int64 &&
                    input.int64 <= 9223372036854776000 &&
                    "number" === typeof input.uint64 &&
                    Math.floor(input.uint64) === input.uint64 &&
                    0 <= input.uint64 &&
                    input.uint64 <= 18446744073709552000 &&
                    "number" === typeof input.float &&
                    -1.175494351e38 <= input.float &&
                    input.float <= 3.4028235e38;
                const $number = (typia.json.createValidateStringify as any)
                    .number;
                const $so0 = (input: any): any =>
                    `{"value":${`[${input.value
                        .map(
                            (elem: any) =>
                                `{"int":${$number(
                                    (elem as any).int,
                                )},"uint":${$number(
                                    (elem as any).uint,
                                )},"int32":${$number(
                                    (elem as any).int32,
                                )},"uint32":${$number(
                                    (elem as any).uint32,
                                )},"int64":${$number(
                                    (elem as any).int64,
                                )},"uint64":${$number(
                                    (elem as any).uint64,
                                )},"float":${$number((elem as any).float)}}`,
                        )
                        .join(",")}]`}}`;
                return $so0(input);
            };
            const output = validate(input) as any;
            if (output.success) output.data = stringify(input);
            return output;
        },
    );
