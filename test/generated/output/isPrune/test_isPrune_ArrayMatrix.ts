import typia from "../../../../src";
import { _test_isPrune } from "../../../internal/_test_isPrune";
import { ArrayMatrix } from "../../../structures/ArrayMatrix";
export const test_isPrune_ArrayMatrix = _test_isPrune("ArrayMatrix", ArrayMatrix.generate, (input) => ((input: any): input is Array<Array<Array<number>>> => { const is = (input: any): input is Array<Array<Array<number>>> => {
    return Array.isArray(input) && input.every((elem: any) => Array.isArray(elem) && elem.every((elem: any) => Array.isArray(elem) && elem.every((elem: any) => "number" === typeof elem && Number.isFinite(elem))));
}; const prune = (input: Array<Array<Array<number>>>): void => {
}; if (!is(input))
    return false; prune(input); return true; })(input), ArrayMatrix.SPOILERS);
