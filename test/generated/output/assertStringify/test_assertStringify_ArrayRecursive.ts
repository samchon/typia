import typia from "../../../src";
import { ArrayRecursive } from "../../structures/ArrayRecursive";
import { _test_assertStringify } from "../internal/_test_assertStringify";
export const test_assertStringify_ArrayRecursive = _test_assertStringify("ArrayRecursive", ArrayRecursive.generate, (input) => ((input: ICategory): string => { const assert = (input: any) => {
    const $guard = (typia.assertStringify as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is ICategory => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => (Array.isArray(input.children) || $guard(_exceptionable, {
            path: _path + ".children",
            expected: "Array<Resolve<ArrayRecursive.ICategory>>",
            value: input.children
        })) && input.children.every((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $guard(_exceptionable, {
            path: _path + ".children[" + _index1 + "]",
            expected: "Resolve<ArrayRecursive.ICategory>",
            value: elem
        })) && $ao0(elem, _path + ".children[" + _index1 + "]", true && _exceptionable)) && ("number" === typeof input.id && !Number.isNaN(input.id) || $guard(_exceptionable, {
            path: _path + ".id",
            expected: "number",
            value: input.id
        })) && ("string" === typeof input.code || $guard(_exceptionable, {
            path: _path + ".code",
            expected: "string",
            value: input.code
        })) && ("number" === typeof input.sequence && !Number.isNaN(input.sequence) || $guard(_exceptionable, {
            path: _path + ".sequence",
            expected: "number",
            value: input.sequence
        })) && (("object" === typeof input.created_at && null !== input.created_at || $guard(_exceptionable, {
            path: _path + ".created_at",
            expected: "Resolve<ArrayRecursive.ITimestamp>",
            value: input.created_at
        })) && $ao1(input.created_at, _path + ".created_at", true && _exceptionable));
        const $ao1 = (input: any, _path: string, _exceptionable: boolean) => ("number" === typeof input.time && !Number.isNaN(input.time) || $guard(_exceptionable, {
            path: _path + ".time",
            expected: "number",
            value: input.time
        })) && ("number" === typeof input.zone && !Number.isNaN(input.zone) || $guard(_exceptionable, {
            path: _path + ".zone",
            expected: "number",
            value: input.zone
        }));
        return ("object" === typeof input && null !== input || $guard(true, {
            path: _path + "",
            expected: "Resolve<ArrayRecursive.ICategory>",
            value: input
        })) && $ao0(input, _path + "", true);
    })(input, "$input", true);
    return input as ICategory;
}; const stringify = (input: ICategory): string => {
    const $string = (typia.assertStringify as any).string;
    const $io0 = (input: any) => Array.isArray(input.children) && input.children.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem)) && "number" === typeof input.id && "string" === typeof input.code && "number" === typeof input.sequence && ("object" === typeof input.created_at && null !== input.created_at && $io1(input.created_at));
    const $io1 = (input: any) => "number" === typeof input.time && "number" === typeof input.zone;
    const $so0 = (input: any) => `{"children":${`[${input.children.map((elem: any) => $so0(elem)).join(",")}]`},"id":${input.id},"code":${$string(input.code)},"sequence":${input.sequence},"created_at":${`{"time":${input.created_at.time},"zone":${input.created_at.zone}}`}}`;
    return $so0(input);
}; return stringify(assert(input)); })(input), ArrayRecursive.SPOILERS);
