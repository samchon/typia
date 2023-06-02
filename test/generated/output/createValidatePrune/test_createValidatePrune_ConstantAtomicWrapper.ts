import typia from "../../../../src";
import { _test_validatePrune } from "../../../internal/_test_validatePrune";
import { ConstantAtomicWrapper } from "../../../structures/ConstantAtomicWrapper";

export const test_createValidatePrune_ConstantAtomicWrapper =
    _test_validatePrune(
        "ConstantAtomicWrapper",
        ConstantAtomicWrapper.generate,
        (input: any): typia.IValidation<ConstantAtomicWrapper> => {
            const validate: any = (
                input: any,
            ): typia.IValidation<ConstantAtomicWrapper> => {
                const __is: any = (
                    input: any,
                ): input is ConstantAtomicWrapper => {
                    const $io0: any = (input: any): boolean =>
                        "boolean" === typeof input.value;
                    const $io1: any = (input: any): boolean =>
                        "number" === typeof input.value &&
                        Number.isFinite(input.value);
                    const $io2: any = (input: any): boolean =>
                        "string" === typeof input.value;
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
                const errors: any = [] as any[];
                const $report: any = (typia.createValidatePrune as any).report(
                    errors,
                );
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is ConstantAtomicWrapper => {
                        const $vo0: any = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                "boolean" === typeof input.value ||
                                    $report(_exceptionable, {
                                        path: _path + ".value",
                                        expected: "boolean",
                                        value: input.value,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo1: any = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                ("number" === typeof input.value &&
                                    Number.isFinite(input.value)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".value",
                                        expected: "number",
                                        value: input.value,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo2: any = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                "string" === typeof input.value ||
                                    $report(_exceptionable, {
                                        path: _path + ".value",
                                        expected: "string",
                                        value: input.value,
                                    }),
                            ].every((flag: boolean) => flag);
                        return (
                            ((Array.isArray(input) ||
                                $report(true, {
                                    path: _path + "",
                                    expected: "ConstantAtomicWrapper",
                                    value: input,
                                })) &&
                                (input.length === 3 ||
                                    $report(true, {
                                        path: _path + "",
                                        expected:
                                            "[ConstantAtomicWrapper.IPointer<boolean>, ConstantAtomicWrapper.IPointer<number>, ConstantAtomicWrapper.IPointer<string>]",
                                        value: input,
                                    })) &&
                                [
                                    ((("object" === typeof input[0] &&
                                        null !== input[0]) ||
                                        $report(true, {
                                            path: _path + "[0]",
                                            expected:
                                                "ConstantAtomicWrapper.IPointer<boolean>",
                                            value: input[0],
                                        })) &&
                                        $vo0(input[0], _path + "[0]", true)) ||
                                        $report(true, {
                                            path: _path + "[0]",
                                            expected:
                                                "ConstantAtomicWrapper.IPointer<boolean>",
                                            value: input[0],
                                        }),
                                    ((("object" === typeof input[1] &&
                                        null !== input[1]) ||
                                        $report(true, {
                                            path: _path + "[1]",
                                            expected:
                                                "ConstantAtomicWrapper.IPointer<number>",
                                            value: input[1],
                                        })) &&
                                        $vo1(input[1], _path + "[1]", true)) ||
                                        $report(true, {
                                            path: _path + "[1]",
                                            expected:
                                                "ConstantAtomicWrapper.IPointer<number>",
                                            value: input[1],
                                        }),
                                    ((("object" === typeof input[2] &&
                                        null !== input[2]) ||
                                        $report(true, {
                                            path: _path + "[2]",
                                            expected:
                                                "ConstantAtomicWrapper.IPointer<string>",
                                            value: input[2],
                                        })) &&
                                        $vo2(input[2], _path + "[2]", true)) ||
                                        $report(true, {
                                            path: _path + "[2]",
                                            expected:
                                                "ConstantAtomicWrapper.IPointer<string>",
                                            value: input[2],
                                        }),
                                ].every((flag: boolean) => flag)) ||
                            $report(true, {
                                path: _path + "",
                                expected: "ConstantAtomicWrapper",
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
            const prune: any = (input: ConstantAtomicWrapper): void => {
                const $io0: any = (input: any): boolean =>
                    "boolean" === typeof input.value;
                const $io1: any = (input: any): boolean =>
                    "number" === typeof input.value;
                const $io2: any = (input: any): boolean =>
                    "string" === typeof input.value;
                const $po0: any = (input: any): any => {
                    for (const key: any of Object.keys(input)) {
                        if ("value" === key) continue;
                        delete input[key];
                    }
                };
                const $po1: any = (input: any): any => {
                    for (const key: any of Object.keys(input)) {
                        if ("value" === key) continue;
                        delete input[key];
                    }
                };
                const $po2: any = (input: any): any => {
                    for (const key: any of Object.keys(input)) {
                        if ("value" === key) continue;
                        delete input[key];
                    }
                };
                if (
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
                ) {
                    if ("object" === typeof input[0] && null !== input[0])
                        $po0(input[0]);
                    if ("object" === typeof input[1] && null !== input[1])
                        $po1(input[1]);
                    if ("object" === typeof input[2] && null !== input[2])
                        $po2(input[2]);
                }
            };
            const output: any = validate(input);
            if (output.success) prune(input);
            return output;
        },
        ConstantAtomicWrapper.SPOILERS,
    );
