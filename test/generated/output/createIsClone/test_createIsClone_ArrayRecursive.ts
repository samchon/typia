import typia from "../../../../src";
import { _test_isClone } from "../../../internal/_test_isClone";
import { ArrayRecursive } from "../../../structures/ArrayRecursive";
export const test_createIsClone_ArrayRecursive = _test_isClone("ArrayRecursive", ArrayRecursive.generate, (input: any): typia.Primitive<ArrayRecursive> | null => { const is = (input: any): input is ArrayRecursive => {
    const $io0 = (input: any): boolean => Array.isArray(input.children) && input.children.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem)) && ("number" === typeof input.id && Number.isFinite(input.id)) && "string" === typeof input.code && ("number" === typeof input.sequence && Number.isFinite(input.sequence)) && ("object" === typeof input.created_at && null !== input.created_at && ("number" === typeof input.created_at.time && Number.isFinite(input.created_at.time) && ("number" === typeof input.created_at.zone && Number.isFinite(input.created_at.zone))));
    return "object" === typeof input && null !== input && $io0(input);
}; const clone = (input: ArrayRecursive): typia.Primitive<ArrayRecursive> => {
    const $io0 = (input: any): boolean => Array.isArray(input.children) && input.children.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem)) && "number" === typeof input.id && "string" === typeof input.code && "number" === typeof input.sequence && ("object" === typeof input.created_at && null !== input.created_at && $io1(input.created_at));
    const $io1 = (input: any): boolean => "number" === typeof input.time && "number" === typeof input.zone;
    const $co0 = (input: any): any => ({
        children: Array.isArray(input.children) ? input.children.map((elem: any) => "object" === typeof elem && null !== elem ? $co0(elem) : elem as any) : input.children as any,
        id: input.id as any,
        code: input.code as any,
        sequence: input.sequence as any,
        created_at: "object" === typeof input.created_at && null !== input.created_at ? $co1(input.created_at) : input.created_at as any
    });
    const $co1 = (input: any): any => ({
        time: input.time as any,
        zone: input.zone as any
    });
    return "object" === typeof input && null !== input ? $co0(input) : input as any;
}; if (!is(input))
    return null; const output = clone(input); return output; }, ArrayRecursive.SPOILERS);
