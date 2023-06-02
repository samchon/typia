import typia from "../../../../src";
import { _test_validateClone } from "../../../internal/_test_validateClone";
import { ToJsonTuple } from "../../../structures/ToJsonTuple";

export const test_validateClone_ToJsonTuple = _test_validateClone(
    "ToJsonTuple",
    ToJsonTuple.generate,
    (input) =>
        ((
            input: any,
        ): typia.IValidation<
            typia.Primitive<
                [
                    ToJsonTuple.IToJson<string>,
                    ToJsonTuple.IToJson<number>,
                    ToJsonTuple.IToJson<boolean>,
                    ToJsonTuple.IObject,
                ]
            >
        > => {
            const validate: any = (
                input: any,
            ): typia.IValidation<
                [
                    ToJsonTuple.IToJson<string>,
                    ToJsonTuple.IToJson<number>,
                    ToJsonTuple.IToJson<boolean>,
                    ToJsonTuple.IObject,
                ]
            > => {
                const __is: any = (
                    input: any,
                ): input is [
                    ToJsonTuple.IToJson<string>,
                    ToJsonTuple.IToJson<number>,
                    ToJsonTuple.IToJson<boolean>,
                    ToJsonTuple.IObject,
                ] => {
                    const $io0: any = (input: any): boolean => true;
                    const $io1: any = (input: any): boolean => true;
                    const $io2: any = (input: any): boolean => true;
                    const $io3: any = (input: any): boolean => true;
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
                const errors: any = [] as any[];
                const $report: any = (typia.validateClone as any).report(
                    errors,
                );
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is [
                        ToJsonTuple.IToJson<string>,
                        ToJsonTuple.IToJson<number>,
                        ToJsonTuple.IToJson<boolean>,
                        ToJsonTuple.IObject,
                    ] => {
                        const $vo0: any = (
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
                        const $vo1: any = (
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
                        const $vo2: any = (
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
                        const $vo3: any = (
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
                                    expected: "ToJsonTuple",
                                    value: input,
                                })) &&
                                (input.length === 4 ||
                                    $report(true, {
                                        path: _path + "",
                                        expected:
                                            "[ToJsonTuple.IToJson<string>, ToJsonTuple.IToJson<number>, ToJsonTuple.IToJson<boolean>, ToJsonTuple.IObject]",
                                        value: input,
                                    })) &&
                                [
                                    ((("object" === typeof input[0] &&
                                        null !== input[0]) ||
                                        $report(true, {
                                            path: _path + "[0]",
                                            expected:
                                                "ToJsonTuple.IToJson<string>",
                                            value: input[0],
                                        })) &&
                                        $vo0(input[0], _path + "[0]", true)) ||
                                        $report(true, {
                                            path: _path + "[0]",
                                            expected:
                                                "ToJsonTuple.IToJson<string>",
                                            value: input[0],
                                        }),
                                    ((("object" === typeof input[1] &&
                                        null !== input[1]) ||
                                        $report(true, {
                                            path: _path + "[1]",
                                            expected:
                                                "ToJsonTuple.IToJson<number>",
                                            value: input[1],
                                        })) &&
                                        $vo1(input[1], _path + "[1]", true)) ||
                                        $report(true, {
                                            path: _path + "[1]",
                                            expected:
                                                "ToJsonTuple.IToJson<number>",
                                            value: input[1],
                                        }),
                                    ((("object" === typeof input[2] &&
                                        null !== input[2]) ||
                                        $report(true, {
                                            path: _path + "[2]",
                                            expected:
                                                "ToJsonTuple.IToJson<boolean>",
                                            value: input[2],
                                        })) &&
                                        $vo2(input[2], _path + "[2]", true)) ||
                                        $report(true, {
                                            path: _path + "[2]",
                                            expected:
                                                "ToJsonTuple.IToJson<boolean>",
                                            value: input[2],
                                        }),
                                    ((("object" === typeof input[3] &&
                                        null !== input[3]) ||
                                        $report(true, {
                                            path: _path + "[3]",
                                            expected: "ToJsonTuple.IObject",
                                            value: input[3],
                                        })) &&
                                        $vo3(input[3], _path + "[3]", true)) ||
                                        $report(true, {
                                            path: _path + "[3]",
                                            expected: "ToJsonTuple.IObject",
                                            value: input[3],
                                        }),
                                ].every((flag: boolean) => flag)) ||
                            $report(true, {
                                path: _path + "",
                                expected: "ToJsonTuple",
                                value: input,
                            })
                        );
                    })(input, "$input", true);
                const success: any = 0 === errors.length;
                return {
                    success,
                    errors,
                    data: success ? input : undefined,
                } as any;
            };
            const clone: any = (
                input: [
                    ToJsonTuple.IToJson<string>,
                    ToJsonTuple.IToJson<number>,
                    ToJsonTuple.IToJson<boolean>,
                    ToJsonTuple.IObject,
                ],
            ): typia.Primitive<
                [
                    ToJsonTuple.IToJson<string>,
                    ToJsonTuple.IToJson<number>,
                    ToJsonTuple.IToJson<boolean>,
                    ToJsonTuple.IObject,
                ]
            > => {
                const $co0: any = (input: any): any => ({
                    code: input.code as any,
                    name: input.name as any,
                });
                return Array.isArray(input) &&
                    input.length === 4 &&
                    true &&
                    true &&
                    true &&
                    true
                    ? ([
                          "object" === typeof input[0] &&
                          null !== input[0] &&
                          "function" === typeof input[0].toJSON
                              ? (input[0].toJSON() as any)
                              : (input[0] as any),
                          "object" === typeof input[1] &&
                          null !== input[1] &&
                          "function" === typeof input[1].toJSON
                              ? (input[1].toJSON() as any)
                              : (input[1] as any),
                          "object" === typeof input[2] &&
                          null !== input[2] &&
                          "function" === typeof input[2].toJSON
                              ? (input[2].toJSON() as any)
                              : (input[2] as any),
                          "object" === typeof input[3] &&
                          null !== input[3] &&
                          "function" === typeof input[3].toJSON
                              ? "object" === typeof input[3].toJSON() &&
                                null !== input[3].toJSON()
                                  ? $co0(input[3].toJSON())
                                  : (input[3].toJSON() as any)
                              : (input[3] as any),
                      ] as any)
                    : (input as any);
            };
            const output: any = validate(input) as any;
            if (output.success) output.data = clone(input);
            return output;
        })(input),
);
