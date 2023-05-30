import typia from "../../../../src";
import { _test_equals } from "../../../internal/_test_equals";
import { FunctionalPropertyUnion } from "../../../structures/FunctionalPropertyUnion";
export const test_createEquals_FunctionalPropertyUnion = _test_equals("FunctionalPropertyUnion", FunctionalPropertyUnion.generate, (input: any, _exceptionable: boolean = true): input is FunctionalPropertyUnion => {
    const $io0 = (input: any, _exceptionable: boolean = true): boolean => "string" === typeof input.name && (null === input.closure || undefined === input.closure || "function" === typeof input.closure || "string" === typeof input.closure || "number" === typeof input.closure && Number.isFinite(input.closure)) && (1 === Object.keys(input).length || Object.keys(input).every(key => {
        if (["name", "closure"].some(prop => key === prop))
            return true;
        const value = input[key];
        if (undefined === value)
            return true;
        return false;
    }));
    return Array.isArray(input) && input.every((elem: any, _index1: number) => "object" === typeof elem && null !== elem && $io0(elem, true));
});
