import typia from "../../../../src";
import { _test_validate } from "../../../internal/_test_validate";
import { ConstantAtomicWrapper } from "../../../structures/ConstantAtomicWrapper";

export const test_createValidate_ConstantAtomicWrapper = _test_validate(
    "ConstantAtomicWrapper",
    ConstantAtomicWrapper.generate,
    (
        input: any,
    ): typia.IValidation<
        [
            ConstantAtomicWrapper.IPointer<boolean>,
            ConstantAtomicWrapper.IPointer<number>,
            ConstantAtomicWrapper.IPointer<string>,
        ]
    > => {
        const errors = [] as any[];
        const $report = (typia.createValidate as any).report(errors);
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
                        ((("object" === typeof input[0] && null !== input[0]) ||
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
                        ((("object" === typeof input[1] && null !== input[1]) ||
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
                        ((("object" === typeof input[2] && null !== input[2]) ||
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
    },
    ConstantAtomicWrapper.SPOILERS,
);
