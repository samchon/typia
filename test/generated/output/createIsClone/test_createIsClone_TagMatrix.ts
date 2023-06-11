import typia from "../../../../src";
import { TagMatrix } from "../../../structures/TagMatrix";
import { _test_isClone } from "../../../internal/_test_isClone";
export const test_createIsClone_TagMatrix = _test_isClone("TagMatrix", TagMatrix.generate, (input: any): typia.Primitive<TagMatrix> | null => { const is = (input: any): input is TagMatrix => {
    const $is_uuid = (typia.createIsClone as any).is_uuid;
    const $io0 = (input: any): boolean => Array.isArray(input.matrix) && 3 === input.matrix.length && input.matrix.every((elem: any) => Array.isArray(elem) && 3 === elem.length && elem.every((elem: any) => "string" === typeof elem && $is_uuid(elem)));
    return "object" === typeof input && null !== input && $io0(input);
}; const clone = (input: TagMatrix): typia.Primitive<TagMatrix> => {
    const $is_uuid = (typia.createIsClone as any).is_uuid;
    const $cp0 = (input: any) => input.map((elem: any) => elem as any);
    const $cp1 = (input: any) => input.map((elem: any) => Array.isArray(elem) ? $cp0(elem) : elem as any);
    const $co0 = (input: any): any => ({
        matrix: Array.isArray(input.matrix) ? $cp1(input.matrix) : input.matrix as any
    });
    return "object" === typeof input && null !== input ? $co0(input) : input as any;
}; if (!is(input))
    return null; const output = clone(input); return output; }, TagMatrix.SPOILERS);
