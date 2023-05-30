import typia from "../../../../src";
import { _test_equals } from "../../../internal/_test_equals";
import { FunctionalValueUnion } from "../../../structures/FunctionalValueUnion";
export const test_createEquals_FunctionalValueUnion = _test_equals("FunctionalValueUnion", FunctionalValueUnion.generate, (input: any, _exceptionable: boolean = true): input is FunctionalValueUnion => {
    return Array.isArray(input) && input.every((elem: any, _index1: number) => undefined !== elem && (null === elem || "function" === typeof elem || "string" === typeof elem || "number" === typeof elem && Number.isFinite(elem)));
});
