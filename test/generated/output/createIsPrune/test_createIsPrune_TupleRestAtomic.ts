import typia from "../../../../src";
import { _test_isPrune } from "../../../internal/_test_isPrune";
import { TupleRestAtomic } from "../../../structures/TupleRestAtomic";
export const test_createIsPrune_TupleRestAtomic = _test_isPrune("TupleRestAtomic", TupleRestAtomic.generate, (input: any): input is TupleRestAtomic => { const is = (input: any): input is TupleRestAtomic => {
    return Array.isArray(input) && ("boolean" === typeof input[0] && ("number" === typeof input[1] && Number.isFinite(input[1])) && (Array.isArray(input.slice(2)) && input.slice(2).every((elem: any) => "string" === typeof elem)));
}; const prune = (input: TupleRestAtomic): void => {
}; if (!is(input))
    return false; prune(input); return true; }, TupleRestAtomic.SPOILERS);
