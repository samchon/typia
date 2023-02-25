import typia from "../../../src";
import { ArrayRecursive } from "../../structures/ArrayRecursive";
import { _test_isClone } from "../internal/_test_isClone";
export const test_isClone_ArrayRecursive = _test_isClone("ArrayRecursive", ArrayRecursive.generate, (input) => ((input: any): typia.Primitive<ICategory> | null => { const is = (input: any): input is ICategory => {
    const $io0 = (input: any) => Array.isArray(input.children) && input.children.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem)) && "number" === typeof input.id && "string" === typeof input.code && "number" === typeof input.sequence && ("object" === typeof input.created_at && null !== input.created_at && ("number" === typeof input.created_at.time && "number" === typeof input.created_at.zone));
    return "object" === typeof input && null !== input && $io0(input);
}; const clone = (input: ICategory): typia.Primitive<ICategory> => {
    const $io0 = (input: any) => Array.isArray(input.children) && input.children.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem)) && "number" === typeof input.id && "string" === typeof input.code && "number" === typeof input.sequence && ("object" === typeof input.created_at && null !== input.created_at && $io1(input.created_at));
    const $io1 = (input: any) => "number" === typeof input.time && "number" === typeof input.zone;
    const $co0 = (input: any) => ({
        children: Array.isArray(input.children) ? input.children.map((elem: any) => "object" === typeof elem && null !== elem ? $co0(elem) : elem) : input.children,
        id: input.id,
        code: input.code,
        sequence: input.sequence,
        created_at: "object" === typeof input.created_at && null !== input.created_at ? $co1(input.created_at) : input.created_at
    });
    const $co1 = (input: any) => ({
        time: input.time,
        zone: input.zone
    });
    return "object" === typeof input && null !== input ? $co0(input) : input;
}; if (!is(input))
    return null; const output = clone(input); return output; })(input), ArrayRecursive.SPOILERS);
