import typia from "../../../../src";
import { _test_isPrune } from "../../../internal/_test_isPrune";
import { TupleRestArray } from "../../../structures/TupleRestArray";
export const test_createIsPrune_TupleRestArray = _test_isPrune("TupleRestArray", TupleRestArray.generate, (input: any): input is TupleRestArray => { const is = (input: any): input is TupleRestArray => {
    return Array.isArray(input) && ("boolean" === typeof input[0] && ("number" === typeof input[1] && Number.isFinite(input[1])) && (Array.isArray(input.slice(2)) && input.slice(2).every((elem: any) => Array.isArray(elem) && elem.every((elem: any) => "string" === typeof elem))));
}; const prune = (input: TupleRestArray): void => {
}; if (!is(input))
    return false; prune(input); return true; }, TupleRestArray.SPOILERS);
