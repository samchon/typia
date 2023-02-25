import typia from "../../../src";
import { TupleRestArray } from "../../structures/TupleRestArray";
import { _test_isPrune } from "../internal/_test_isPrune";
export const test_isPrune_TupleRestArray = _test_isPrune("TupleRestArray", TupleRestArray.generate, (input) => ((input: any): input is TupleRestArray => { const is = (input: any): input is TupleRestArray => {
    return Array.isArray(input) && ("boolean" === typeof input[0] && "number" === typeof input[1] && (Array.isArray(input.slice(2)) && input.slice(2).every((elem: any) => Array.isArray(elem) && elem.every((elem: any) => "string" === typeof elem))));
}; const prune = (input: TupleRestArray): void => {
}; if (!is(input))
    return false; prune(input); return true; })(input), TupleRestArray.SPOILERS);
