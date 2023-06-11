import typia from "../../../../src";
import { TupleRestAtomic } from "../../../structures/TupleRestAtomic";
import { _test_isPrune } from "../../../internal/_test_isPrune";
export const test_isPrune_TupleRestAtomic = _test_isPrune("TupleRestAtomic", TupleRestAtomic.generate, (input) => ((input: any): input is [boolean, number, ...string[]] => { const is = (input: any): input is [boolean, number, ...string[]] => {
    return Array.isArray(input) && ("boolean" === typeof input[0] && ("number" === typeof input[1] && Number.isFinite(input[1])) && (Array.isArray(input.slice(2)) && input.slice(2).every((elem: any) => "string" === typeof elem)));
}; const prune = (input: [boolean, number, ...string[]]): void => {
}; if (!is(input))
    return false; prune(input); return true; })(input), TupleRestAtomic.SPOILERS);
