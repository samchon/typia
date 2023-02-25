import typia from "../../../src";
import { ArrayRecursive } from "../../structures/ArrayRecursive";
import { _test_isStringify } from "../internal/_test_isStringify";
export const test_createIsStringify_ArrayRecursive = _test_isStringify("ArrayRecursive", ArrayRecursive.generate, (input: ICategory): string | null => { const is = (input: any): input is ICategory => {
    const $io0 = (input: any) => Array.isArray(input.children) && input.children.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem)) && ("number" === typeof input.id && !Number.isNaN(input.id)) && "string" === typeof input.code && ("number" === typeof input.sequence && !Number.isNaN(input.sequence)) && ("object" === typeof input.created_at && null !== input.created_at && ("number" === typeof input.created_at.time && !Number.isNaN(input.created_at.time) && ("number" === typeof input.created_at.zone && !Number.isNaN(input.created_at.zone))));
    return "object" === typeof input && null !== input && $io0(input);
}; const stringify = (input: ICategory): string => {
    const $string = (typia.createIsStringify as any).string;
    const $io0 = (input: any) => Array.isArray(input.children) && input.children.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem)) && "number" === typeof input.id && "string" === typeof input.code && "number" === typeof input.sequence && ("object" === typeof input.created_at && null !== input.created_at && $io1(input.created_at));
    const $io1 = (input: any) => "number" === typeof input.time && "number" === typeof input.zone;
    const $so0 = (input: any) => `{"children":${`[${input.children.map((elem: any) => $so0(elem)).join(",")}]`},"id":${input.id},"code":${$string(input.code)},"sequence":${input.sequence},"created_at":${`{"time":${input.created_at.time},"zone":${input.created_at.zone}}`}}`;
    return $so0(input);
}; return is(input) ? stringify(input) : null; }, ArrayRecursive.SPOILERS);
