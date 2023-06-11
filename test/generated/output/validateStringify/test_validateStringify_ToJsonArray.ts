import typia from "../../../../src";
import { _test_validateStringify } from "../../../internal/_test_validateStringify";
import { ToJsonArray } from "../../../structures/ToJsonArray";

export const test_validateStringify_ToJsonArray = _test_validateStringify(
    "ToJsonArray",
    ToJsonArray.generate,
    (input) =>
        ((
            input: [
                ToJsonArray.IArray<boolean>,
                ToJsonArray.IArray<number>,
                ToJsonArray.IArray<string>,
                ToJsonArray.IArray<ToJsonArray.IObject>,
            ],
        ): typia.IValidation<string> => {
            const validate = (
                input: any,
            ): typia.IValidation<
                [
                    ToJsonArray.IArray<boolean>,
                    ToJsonArray.IArray<number>,
                    ToJsonArray.IArray<string>,
                    ToJsonArray.IArray<ToJsonArray.IObject>,
                ]
            > => {
                const errors = [] as any[];
                const $report = (typia.validateStringify as any).report(errors);
                const __is = (
                    input: any,
                ): input is [
                    ToJsonArray.IArray<boolean>,
                    ToJsonArray.IArray<number>,
                    ToJsonArray.IArray<string>,
                    ToJsonArray.IArray<ToJsonArray.IObject>,
                ] => {
                    const $io0 = (input: any): boolean => true;
                    const $io1 = (input: any): boolean => true;
                    const $io2 = (input: any): boolean => true;
                    const $io3 = (input: any): boolean => true;
                    return (
                        Array.isArray(input) &&
                        input.length === 4 &&
                        "object" === typeof input[0] &&
                        null !== input[0] &&
                        $io0(input[0]) &&
                        "object" === typeof input[1] &&
                        null !== input[1] &&
                        $io1(input[1]) &&
                        "object" === typeof input[2] &&
                        null !== input[2] &&
                        $io2(input[2]) &&
                        "object" === typeof input[3] &&
                        null !== input[3] &&
                        $io3(input[3])
                    );
                };
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is [
                        ToJsonArray.IArray<boolean>,
                        ToJsonArray.IArray<number>,
                        ToJsonArray.IArray<string>,
                        ToJsonArray.IArray<ToJsonArray.IObject>,
                    ] => {
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
                        const $vo3 = (
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
                                    expected: "ToJsonArray",
                                    value: input,
                                })) &&
                                (input.length === 4 ||
                                    $report(true, {
                                        path: _path + "",
                                        expected:
                                            "[ToJsonArray.IArray<boolean>, ToJsonArray.IArray<number>, ToJsonArray.IArray<string>, ToJsonArray.IArray<ToJsonArray.IObject>]",
                                        value: input,
                                    })) &&
                                [
                                    ((("object" === typeof input[0] &&
                                        null !== input[0]) ||
                                        $report(true, {
                                            path: _path + "[0]",
                                            expected:
                                                "ToJsonArray.IArray<boolean>",
                                            value: input[0],
                                        })) &&
                                        $vo0(input[0], _path + "[0]", true)) ||
                                        $report(true, {
                                            path: _path + "[0]",
                                            expected:
                                                "ToJsonArray.IArray<boolean>",
                                            value: input[0],
                                        }),
                                    ((("object" === typeof input[1] &&
                                        null !== input[1]) ||
                                        $report(true, {
                                            path: _path + "[1]",
                                            expected:
                                                "ToJsonArray.IArray<number>",
                                            value: input[1],
                                        })) &&
                                        $vo1(input[1], _path + "[1]", true)) ||
                                        $report(true, {
                                            path: _path + "[1]",
                                            expected:
                                                "ToJsonArray.IArray<number>",
                                            value: input[1],
                                        }),
                                    ((("object" === typeof input[2] &&
                                        null !== input[2]) ||
                                        $report(true, {
                                            path: _path + "[2]",
                                            expected:
                                                "ToJsonArray.IArray<string>",
                                            value: input[2],
                                        })) &&
                                        $vo2(input[2], _path + "[2]", true)) ||
                                        $report(true, {
                                            path: _path + "[2]",
                                            expected:
                                                "ToJsonArray.IArray<string>",
                                            value: input[2],
                                        }),
                                    ((("object" === typeof input[3] &&
                                        null !== input[3]) ||
                                        $report(true, {
                                            path: _path + "[3]",
                                            expected:
                                                "ToJsonArray.IArray<ToJsonArray.IObject>",
                                            value: input[3],
                                        })) &&
                                        $vo3(input[3], _path + "[3]", true)) ||
                                        $report(true, {
                                            path: _path + "[3]",
                                            expected:
                                                "ToJsonArray.IArray<ToJsonArray.IObject>",
                                            value: input[3],
                                        }),
                                ].every((flag: boolean) => flag)) ||
                            $report(true, {
                                path: _path + "",
                                expected: "ToJsonArray",
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
            const stringify = (
                input: [
                    ToJsonArray.IArray<boolean>,
                    ToJsonArray.IArray<number>,
                    ToJsonArray.IArray<string>,
                    ToJsonArray.IArray<ToJsonArray.IObject>,
                ],
            ): string => {
                const $number = (typia.validateStringify as any).number;
                const $string = (typia.validateStringify as any).string;
                return `[${`[${input[0]
                    .toJSON()
                    .map((elem: any) => elem)
                    .join(",")}]`},${`[${input[1]
                    .toJSON()
                    .map((elem: any) => $number(elem))
                    .join(",")}]`},${`[${input[2]
                    .toJSON()
                    .map((elem: any) => $string(elem))
                    .join(",")}]`},${`[${input[3]
                    .toJSON()
                    .map((elem: any) => `{"id":${$string((elem as any).id)}}`)
                    .join(",")}]`}]`;
            };
            const output = validate(input) as any;
            if (output.success) output.data = stringify(input);
            return output;
        })(input),
);
