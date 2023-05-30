import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { FunctionalPropertyUnion } from "../../../structures/FunctionalPropertyUnion";
export const test_createIs_FunctionalPropertyUnion = _test_is("FunctionalPropertyUnion", FunctionalPropertyUnion.generate, (input: any): input is FunctionalPropertyUnion => {
    const $io0 = (input: any): boolean => "string" === typeof input.name && (null === input.closure || undefined === input.closure || "function" === typeof input.closure || "string" === typeof input.closure || "number" === typeof input.closure && Number.isFinite(input.closure));
    return Array.isArray(input) && input.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem));
}, FunctionalPropertyUnion.SPOILERS);
