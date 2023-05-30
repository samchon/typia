import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { FunctionalTupleUnion } from "../../../structures/FunctionalTupleUnion";
export const test_createIs_FunctionalTupleUnion = _test_is("FunctionalTupleUnion", FunctionalTupleUnion.generate, (input: any): input is FunctionalTupleUnion => {
    return Array.isArray(input) && (input.length === 4 && (undefined !== input[0] && (null === input[0] || "function" === typeof input[0] || "string" === typeof input[0] || "number" === typeof input[0] && Number.isFinite(input[0]))) && (undefined !== input[1] && (null === input[1] || "function" === typeof input[1] || "string" === typeof input[1] || "number" === typeof input[1] && Number.isFinite(input[1]))) && (undefined !== input[2] && (null === input[2] || "function" === typeof input[2] || "string" === typeof input[2] || "number" === typeof input[2] && Number.isFinite(input[2]))) && (undefined !== input[3] && (null === input[3] || "function" === typeof input[3] || "string" === typeof input[3] || "number" === typeof input[3] && Number.isFinite(input[3]))));
}, FunctionalTupleUnion.SPOILERS);
