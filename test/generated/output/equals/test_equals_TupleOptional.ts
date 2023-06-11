import typia from "../../../../src";
import { TupleOptional } from "../../../structures/TupleOptional";
import { _test_equals } from "../../../internal/_test_equals";
export const test_equals_TupleOptional = _test_equals("TupleOptional", TupleOptional.generate, (input) => ((input: any, _exceptionable: boolean = true): input is Array<[number, boolean, string, (number | null | undefined)?, (string | null | undefined)?]> => {
    return Array.isArray(input) && input.every((elem: any, _index1: number) => Array.isArray(elem) && (3 <= elem.length && 5 >= elem.length && ("number" === typeof elem[0] && Number.isFinite(elem[0])) && "boolean" === typeof elem[1] && "string" === typeof elem[2] && (null === elem[3] || undefined === elem[3] || "number" === typeof elem[3] && Number.isFinite(elem[3])) && (null === elem[4] || undefined === elem[4] || "string" === typeof elem[4])));
})(input));
