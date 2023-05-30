import typia from "../../../../src";
import { _test_isParse } from "../../../internal/_test_isParse";
import { TagMatrix } from "../../../structures/TagMatrix";
export const test_createIsParse_TagMatrix = _test_isParse("TagMatrix", TagMatrix.generate, (input: any): typia.Primitive<TagMatrix> => { const is = (input: any): input is TagMatrix => {
    const $is_uuid = (typia.createIsParse as any).is_uuid;
    const $io0 = (input: any): boolean => Array.isArray(input.matrix) && 3 === input.matrix.length && input.matrix.every((elem: any) => Array.isArray(elem) && 3 === elem.length && elem.every((elem: any) => "string" === typeof elem && $is_uuid(elem)));
    return "object" === typeof input && null !== input && $io0(input);
}; input = JSON.parse(input); return is(input) ? input as any : null; }, TagMatrix.SPOILERS);
