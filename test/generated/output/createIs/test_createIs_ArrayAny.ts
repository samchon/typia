import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { ArrayAny } from "../../../structures/ArrayAny";
export const test_createIs_ArrayAny = _test_is("ArrayAny", ArrayAny.generate, (input: any): input is ArrayAny => {
    const $io0 = (input: any): boolean => Array.isArray(input.anys) && (undefined === input.undefindable1 || Array.isArray(input.undefindable1)) && (undefined === input.undefindable2 || Array.isArray(input.undefindable2)) && (null === input.nullables1 || Array.isArray(input.nullables1)) && (null === input.nullables2 || Array.isArray(input.nullables2)) && (null === input.both1 || undefined === input.both1 || Array.isArray(input.both1)) && (null === input.both2 || undefined === input.both2 || Array.isArray(input.both2)) && (null === input.both3 || undefined === input.both3 || Array.isArray(input.both3)) && Array.isArray(input.union);
    return "object" === typeof input && null !== input && $io0(input);
}, ArrayAny.SPOILERS);
