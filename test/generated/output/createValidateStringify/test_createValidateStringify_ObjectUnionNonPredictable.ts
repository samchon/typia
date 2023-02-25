import typia from "../../../src";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";
import { _test_validateStringify } from "../internal/_test_validateStringify";
export const test_createValidateStringify_ObjectUnionNonPredictable = _test_validateStringify("ObjectUnionNonPredictable", ObjectUnionNonPredictable.generate, (input: ObjectUnionNonPredictable): typia.IValidation<string> => { const validate = (input: any): typia.IValidation<ObjectUnionNonPredictable> => {
    const errors = [] as any[];
    const $report = (typia.createValidateStringify as any).report(errors);
    ((input: any, _path: string, _exceptionable: boolean): input is ObjectUnionNonPredictable => {
        const $vo0 = (input: any, _path: string, _exceptionable: boolean) => [("object" === typeof input.value && null !== input.value || $report(_exceptionable, {
                path: _path + ".value",
                expected: "Resolve<ObjectUnionNonPredictable.IPointer<ObjectUnionNonPredictable.IUnion>>",
                value: input.value
            })) && $vo1(input.value, _path + ".value", true && _exceptionable) || $report(_exceptionable, {
                path: _path + ".value",
                expected: "Resolve<ObjectUnionNonPredictable.IPointer<ObjectUnionNonPredictable.IUnion>>",
                value: input.value
            })].every((flag: boolean) => flag);
        const $vo1 = (input: any, _path: string, _exceptionable: boolean) => [("object" === typeof input.value && null !== input.value || $report(_exceptionable, {
                path: _path + ".value",
                expected: "(Resolve<ObjectUnionNonPredictable.IWrapper<boolean>> | Resolve<ObjectUnionNonPredictable.IWrapper<number>> | Resolve<ObjectUnionNonPredictable.IWrapper<string>>)",
                value: input.value
            })) && $vu0(input.value, _path + ".value", true && _exceptionable) || $report(_exceptionable, {
                path: _path + ".value",
                expected: "(Resolve<ObjectUnionNonPredictable.IWrapper<boolean>> | Resolve<ObjectUnionNonPredictable.IWrapper<number>> | Resolve<ObjectUnionNonPredictable.IWrapper<string>>)",
                value: input.value
            })].every((flag: boolean) => flag);
        const $vo2 = (input: any, _path: string, _exceptionable: boolean) => [("object" === typeof input.value && null !== input.value || $report(_exceptionable, {
                path: _path + ".value",
                expected: "Resolve<ObjectUnionNonPredictable.IPointer<boolean>>",
                value: input.value
            })) && $vo3(input.value, _path + ".value", true && _exceptionable) || $report(_exceptionable, {
                path: _path + ".value",
                expected: "Resolve<ObjectUnionNonPredictable.IPointer<boolean>>",
                value: input.value
            })].every((flag: boolean) => flag);
        const $vo3 = (input: any, _path: string, _exceptionable: boolean) => ["boolean" === typeof input.value || $report(_exceptionable, {
                path: _path + ".value",
                expected: "boolean",
                value: input.value
            })].every((flag: boolean) => flag);
        const $vo4 = (input: any, _path: string, _exceptionable: boolean) => [("object" === typeof input.value && null !== input.value || $report(_exceptionable, {
                path: _path + ".value",
                expected: "Resolve<ObjectUnionNonPredictable.IPointer<number>>",
                value: input.value
            })) && $vo5(input.value, _path + ".value", true && _exceptionable) || $report(_exceptionable, {
                path: _path + ".value",
                expected: "Resolve<ObjectUnionNonPredictable.IPointer<number>>",
                value: input.value
            })].every((flag: boolean) => flag);
        const $vo5 = (input: any, _path: string, _exceptionable: boolean) => ["number" === typeof input.value && !Number.isNaN(input.value) || $report(_exceptionable, {
                path: _path + ".value",
                expected: "number",
                value: input.value
            })].every((flag: boolean) => flag);
        const $vo6 = (input: any, _path: string, _exceptionable: boolean) => [("object" === typeof input.value && null !== input.value || $report(_exceptionable, {
                path: _path + ".value",
                expected: "Resolve<ObjectUnionNonPredictable.IPointer<string>>",
                value: input.value
            })) && $vo7(input.value, _path + ".value", true && _exceptionable) || $report(_exceptionable, {
                path: _path + ".value",
                expected: "Resolve<ObjectUnionNonPredictable.IPointer<string>>",
                value: input.value
            })].every((flag: boolean) => flag);
        const $vo7 = (input: any, _path: string, _exceptionable: boolean) => ["string" === typeof input.value || $report(_exceptionable, {
                path: _path + ".value",
                expected: "string",
                value: input.value
            })].every((flag: boolean) => flag);
        const $vu0 = (input: any, _path: string, _exceptionable: boolean) => $vo2(input, _path, false && _exceptionable) || $vo4(input, _path, false && _exceptionable) || $vo6(input, _path, false && _exceptionable);
        return (Array.isArray(input) || $report(true, {
            path: _path + "",
            expected: "Array<Resolve<ObjectUnionNonPredictable.IWrapper<ObjectUnionNonPredictable.IUnion>>>",
            value: input
        })) && input.map((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $report(true, {
            path: _path + "[" + _index1 + "]",
            expected: "Resolve<ObjectUnionNonPredictable.IWrapper<ObjectUnionNonPredictable.IUnion>>",
            value: elem
        })) && $vo0(elem, _path + "[" + _index1 + "]", true) || $report(true, {
            path: _path + "[" + _index1 + "]",
            expected: "Resolve<ObjectUnionNonPredictable.IWrapper<ObjectUnionNonPredictable.IUnion>>",
            value: elem
        })).every((flag: boolean) => flag) || $report(true, {
            path: _path + "",
            expected: "Array<Resolve<ObjectUnionNonPredictable.IWrapper<ObjectUnionNonPredictable.IUnion>>>",
            value: input
        });
    })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as typia.IValidation<ObjectUnionNonPredictable>;
}; const stringify = (input: ObjectUnionNonPredictable): string => {
    const $string = (typia.createValidateStringify as any).string;
    const $throws = (typia.createValidateStringify as any).throws;
    const $io1 = (input: any) => "object" === typeof input.value && null !== input.value && $iu0(input.value);
    const $io2 = (input: any) => "object" === typeof input.value && null !== input.value && $io3(input.value);
    const $io3 = (input: any) => "boolean" === typeof input.value;
    const $io4 = (input: any) => "object" === typeof input.value && null !== input.value && $io5(input.value);
    const $io5 = (input: any) => "number" === typeof input.value;
    const $io6 = (input: any) => "object" === typeof input.value && null !== input.value && $io7(input.value);
    const $io7 = (input: any) => "string" === typeof input.value;
    const $iu0 = (input: any) => $io2(input) || $io4(input) || $io6(input);
    const $so0 = (input: any) => `{"value":${$so1(input.value)}}`;
    const $so1 = (input: any) => `{"value":${$su0(input.value)}}`;
    const $so2 = (input: any) => `{"value":${`{"value":${input.value.value}}`}}`;
    const $so4 = (input: any) => `{"value":${`{"value":${input.value.value}}`}}`;
    const $so6 = (input: any) => `{"value":${`{"value":${$string(input.value.value)}}`}}`;
    const $su0 = (input: any) => (() => {
        if ($io2(input))
            return $so2(input);
        if ($io4(input))
            return $so4(input);
        if ($io6(input))
            return $so6(input);
        $throws({
            expected: "(ObjectUnionNonPredictable.IWrapper<boolean> | ObjectUnionNonPredictable.IWrapper<number> | ObjectUnionNonPredictable.IWrapper<string>)",
            value: input
        });
    })();
    return `[${input.map((elem: any) => $so0(elem)).join(",")}]`;
}; const output = validate(input) as any; if (output.success)
    output.data = stringify(input); return output; }, ObjectUnionNonPredictable.SPOILERS);
