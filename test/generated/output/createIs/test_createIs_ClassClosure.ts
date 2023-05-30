import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { ClassClosure } from "../../../structures/ClassClosure";
export const test_createIs_ClassClosure = _test_is("ClassClosure", ClassClosure.generate, (input: any): input is ClassClosure => {
    const $io0 = (input: any): boolean => "string" === typeof input.id && "something" === input.type && "function" === typeof input.closure;
    return "object" === typeof input && null !== input && $io0(input);
}, ClassClosure.SPOILERS);
