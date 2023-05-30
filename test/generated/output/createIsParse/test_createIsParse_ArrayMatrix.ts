import typia from "../../../../src";
import { _test_isParse } from "../../../internal/_test_isParse";
import { ArrayMatrix } from "../../../structures/ArrayMatrix";
export const test_createIsParse_ArrayMatrix = _test_isParse("ArrayMatrix", ArrayMatrix.generate, (input: any): typia.Primitive<ArrayMatrix> => { const is = (input: any): input is ArrayMatrix => {
    return Array.isArray(input) && input.every((elem: any) => Array.isArray(elem) && elem.every((elem: any) => Array.isArray(elem) && elem.every((elem: any) => "number" === typeof elem && Number.isFinite(elem))));
}; input = JSON.parse(input); return is(input) ? input as any : null; }, ArrayMatrix.SPOILERS);
