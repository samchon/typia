import typia from "../../../../src";
import { _test_validateParse } from "../../../internal/_test_validateParse";
import { ConstantAtomicWrapper } from "../../../structures/ConstantAtomicWrapper";

export const test_validateParse_ConstantAtomicWrapper = _test_validateParse(
    "ConstantAtomicWrapper",
    ConstantAtomicWrapper.generate,
    (input) =>
        ((
            input: string,
        ): typia.IValidation<typia.Primitive<ConstantAtomicWrapper>> => {
            const validate = (
                input: any,
            ): typia.IValidation<ConstantAtomicWrapper> => {
                const __is = (input: any): input is ConstantAtomicWrapper => {
                    const $io0 = (input: any): boolean =>
                        "boolean" === typeof input.value;
                    const $io1 = (input: any): boolean =>
                        "number" === typeof input.value &&
                        Number.isFinite(input.value);
                    const $io2 = (input: any): boolean =>
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
                const errors = [] as any[];
                const $report = (typia.validateParse as any).report(errors);
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is ConstantAtomicWrapper => {
                        const $vo0 = (
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
                        const $vo1 = (
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
                        const $vo2 = (
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
                                    expected:
                                        "[Resolve<ConstantAtomicWrapper.IPointer<boolean>>, Resolve<ConstantAtomicWrapper.IPointer<number>>, Resolve<ConstantAtomicWrapper.IPointer<string>>]",
                                    value: input,
                                })) &&
                                (input.length === 3 ||
                                    $report(true, {
                                        path: _path + "",
                                        expected:
                                            "[Resolve<ConstantAtomicWrapper.IPointer<boolean>>, Resolve<ConstantAtomicWrapper.IPointer<number>>, Resolve<ConstantAtomicWrapper.IPointer<string>>]",
                                        value: input,
                                    })) &&
                                [
                                    ((("object" === typeof input[0] &&
                                        null !== input[0]) ||
                                        $report(true, {
                                            path: _path + "[0]",
                                            expected:
                                                "Resolve<ConstantAtomicWrapper.IPointer<boolean>>",
                                            value: input[0],
                                        })) &&
                                        $vo0(input[0], _path + "[0]", true)) ||
                                        $report(true, {
                                            path: _path + "[0]",
                                            expected:
                                                "Resolve<ConstantAtomicWrapper.IPointer<boolean>>",
                                            value: input[0],
                                        }),
                                    ((("object" === typeof input[1] &&
                                        null !== input[1]) ||
                                        $report(true, {
                                            path: _path + "[1]",
                                            expected:
                                                "Resolve<ConstantAtomicWrapper.IPointer<number>>",
                                            value: input[1],
                                        })) &&
                                        $vo1(input[1], _path + "[1]", true)) ||
                                        $report(true, {
                                            path: _path + "[1]",
                                            expected:
                                                "Resolve<ConstantAtomicWrapper.IPointer<number>>",
                                            value: input[1],
                                        }),
                                    ((("object" === typeof input[2] &&
                                        null !== input[2]) ||
                                        $report(true, {
                                            path: _path + "[2]",
                                            expected:
                                                "Resolve<ConstantAtomicWrapper.IPointer<string>>",
                                            value: input[2],
                                        })) &&
                                        $vo2(input[2], _path + "[2]", true)) ||
                                        $report(true, {
                                            path: _path + "[2]",
                                            expected:
                                                "Resolve<ConstantAtomicWrapper.IPointer<string>>",
                                            value: input[2],
                                        }),
                                ].every((flag: boolean) => flag)) ||
                            $report(true, {
                                path: _path + "",
                                expected:
                                    "[Resolve<ConstantAtomicWrapper.IPointer<boolean>>, Resolve<ConstantAtomicWrapper.IPointer<number>>, Resolve<ConstantAtomicWrapper.IPointer<string>>]",
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
            input = JSON.parse(input);
            const output = validate(input);
            return output as any;
        })(input),
    ConstantAtomicWrapper.SPOILERS,
);
