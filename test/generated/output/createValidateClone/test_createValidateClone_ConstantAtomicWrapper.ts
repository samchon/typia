import typia from "../../../src";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";
import { _test_validateClone } from "../internal/_test_validateClone";
export const test_createValidateClone_ConstantAtomicWrapper = _test_validateClone("ConstantAtomicWrapper", ConstantAtomicWrapper.generate, (input: any): typia.IValidation<typia.Primitive<ConstantAtomicWrapper>> => { const validate = (input: any): typia.IValidation<ConstantAtomicWrapper> => {
    const errors = [] as any[];
    const $report = (typia.createValidateClone as any).report(errors);
    ((input: any, _path: string, _exceptionable: boolean): input is ConstantAtomicWrapper => {
        const $vo0 = (input: any, _path: string, _exceptionable: boolean) => ["boolean" === typeof input.value || $report(_exceptionable, {
                path: _path + ".value",
                expected: "boolean",
                value: input.value
            })].every((flag: boolean) => flag);
        const $vo1 = (input: any, _path: string, _exceptionable: boolean) => ["number" === typeof input.value && !Number.isNaN(input.value) || $report(_exceptionable, {
                path: _path + ".value",
                expected: "number",
                value: input.value
            })].every((flag: boolean) => flag);
        const $vo2 = (input: any, _path: string, _exceptionable: boolean) => ["string" === typeof input.value || $report(_exceptionable, {
                path: _path + ".value",
                expected: "string",
                value: input.value
            })].every((flag: boolean) => flag);
        return (Array.isArray(input) || $report(true, {
            path: _path + "",
            expected: "[Resolve<ConstantAtomicWrapper.IPointer<boolean>>, Resolve<ConstantAtomicWrapper.IPointer<number>>, Resolve<ConstantAtomicWrapper.IPointer<string>>]",
            value: input
        })) && ((input.length === 3 || $report(true, {
            path: _path + "",
            expected: "[Resolve<ConstantAtomicWrapper.IPointer<boolean>>, Resolve<ConstantAtomicWrapper.IPointer<number>>, Resolve<ConstantAtomicWrapper.IPointer<string>>]",
            value: input
        })) && [
            ("object" === typeof input[0] && null !== input[0] || $report(true, {
                path: _path + "[0]",
                expected: "Resolve<ConstantAtomicWrapper.IPointer<boolean>>",
                value: input[0]
            })) && $vo0(input[0], _path + "[0]", true) || $report(true, {
                path: _path + "[0]",
                expected: "Resolve<ConstantAtomicWrapper.IPointer<boolean>>",
                value: input[0]
            }),
            ("object" === typeof input[1] && null !== input[1] || $report(true, {
                path: _path + "[1]",
                expected: "Resolve<ConstantAtomicWrapper.IPointer<number>>",
                value: input[1]
            })) && $vo1(input[1], _path + "[1]", true) || $report(true, {
                path: _path + "[1]",
                expected: "Resolve<ConstantAtomicWrapper.IPointer<number>>",
                value: input[1]
            }),
            ("object" === typeof input[2] && null !== input[2] || $report(true, {
                path: _path + "[2]",
                expected: "Resolve<ConstantAtomicWrapper.IPointer<string>>",
                value: input[2]
            })) && $vo2(input[2], _path + "[2]", true) || $report(true, {
                path: _path + "[2]",
                expected: "Resolve<ConstantAtomicWrapper.IPointer<string>>",
                value: input[2]
            })
        ].every((flag: boolean) => flag)) || $report(true, {
            path: _path + "",
            expected: "[Resolve<ConstantAtomicWrapper.IPointer<boolean>>, Resolve<ConstantAtomicWrapper.IPointer<number>>, Resolve<ConstantAtomicWrapper.IPointer<string>>]",
            value: input
        });
    })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as typia.IValidation<ConstantAtomicWrapper>;
}; const clone = (input: ConstantAtomicWrapper): typia.Primitive<ConstantAtomicWrapper> => {
    const $io0 = (input: any) => "boolean" === typeof input.value;
    const $io1 = (input: any) => "number" === typeof input.value;
    const $io2 = (input: any) => "string" === typeof input.value;
    const $co0 = (input: any) => ({
        value: input.value
    });
    const $co1 = (input: any) => ({
        value: input.value
    });
    const $co2 = (input: any) => ({
        value: input.value
    });
    return Array.isArray(input) && (input.length === 3 && ("object" === typeof input[0] && null !== input[0] && $io0(input[0])) && ("object" === typeof input[1] && null !== input[1] && $io1(input[1])) && ("object" === typeof input[2] && null !== input[2] && $io2(input[2]))) ? [
        "object" === typeof input[0] && null !== input[0] ? $co0(input[0]) : input[0],
        "object" === typeof input[1] && null !== input[1] ? $co1(input[1]) : input[1],
        "object" === typeof input[2] && null !== input[2] ? $co2(input[2]) : input[2]
    ] : input;
}; const output = validate(input) as any; if (output.success)
    output.data = clone(input); return output; }, ConstantAtomicWrapper.SPOILERS);
