import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { FunctionalValueUnion } from "../../../structures/FunctionalValueUnion";
export const test_createIs_FunctionalValueUnion = _test_is("FunctionalValueUnion", FunctionalValueUnion.generate, (input: any): input is FunctionalValueUnion => {
    return Array.isArray(input) && input.every((elem: any) => undefined !== elem && (null === elem || "function" === typeof elem || "string" === typeof elem || "number" === typeof elem && Number.isFinite(elem)));
}, FunctionalValueUnion.SPOILERS);
