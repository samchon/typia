import typia from "../../../../src";
import { _test_isPrune } from "../../../internal/_test_isPrune";
import { TupleOptional } from "../../../structures/TupleOptional";
export const test_createIsPrune_TupleOptional = _test_isPrune("TupleOptional", TupleOptional.generate, (input: any): input is TupleOptional => { const is = (input: any): input is TupleOptional => {
    return Array.isArray(input) && input.every((elem: any) => Array.isArray(elem) && (3 <= elem.length && 5 >= elem.length && ("number" === typeof elem[0] && Number.isFinite(elem[0])) && "boolean" === typeof elem[1] && "string" === typeof elem[2] && (null === elem[3] || undefined === elem[3] || "number" === typeof elem[3] && Number.isFinite(elem[3])) && (null === elem[4] || undefined === elem[4] || "string" === typeof elem[4])));
}; const prune = (input: TupleOptional): void => {
}; if (!is(input))
    return false; prune(input); return true; }, TupleOptional.SPOILERS);
