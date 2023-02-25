import typia from "../../../src";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";
import { _test_equals } from "../internal/_test_equals";
export const test_createEquals_FunctionalValueUnion = _test_equals("FunctionalValueUnion", FunctionalValueUnion.generate, (input: any, _exceptionable: boolean): input is FunctionalValueUnion => {
    return Array.isArray(input) && input.every((elem: any, _index1: number) => null !== elem && undefined !== elem && ("function" === typeof elem || "string" === typeof elem || "number" === typeof elem));
});
