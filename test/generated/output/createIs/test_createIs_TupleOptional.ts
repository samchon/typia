import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { TupleOptional } from "../../../structures/TupleOptional";
export const test_createIs_TupleOptional = _test_is("TupleOptional", TupleOptional.generate, (input: any): input is TupleOptional => {
    return Array.isArray(input) && input.every((elem: any) => Array.isArray(elem) && (3 <= elem.length && 5 >= elem.length && ("number" === typeof elem[0] && Number.isFinite(elem[0])) && "boolean" === typeof elem[1] && "string" === typeof elem[2] && (null === elem[3] || undefined === elem[3] || "number" === typeof elem[3] && Number.isFinite(elem[3])) && (null === elem[4] || undefined === elem[4] || "string" === typeof elem[4])));
}, TupleOptional.SPOILERS);
