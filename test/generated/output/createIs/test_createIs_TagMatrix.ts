import typia from "../../../../src";
import { TagMatrix } from "../../../structures/TagMatrix";
import { _test_is } from "../../../internal/_test_is";
export const test_createIs_TagMatrix = _test_is("TagMatrix", TagMatrix.generate, (input: any): input is TagMatrix => {
    const $is_uuid = (typia.createIs as any).is_uuid;
    const $io0 = (input: any): boolean => Array.isArray(input.matrix) && 3 === input.matrix.length && input.matrix.every((elem: any) => Array.isArray(elem) && 3 === elem.length && elem.every((elem: any) => "string" === typeof elem && $is_uuid(elem)));
    return "object" === typeof input && null !== input && $io0(input);
}, TagMatrix.SPOILERS);
