import typia from "../../../src";
import { ObjectClosure } from "../../structures/ObjectClosure";
import { _test_is } from "../internal/_test_is";
export const test_createIs_ObjectClosure = _test_is("ObjectClosure", ObjectClosure.generate, (input: any): input is IRecord => {
    const $io0 = (input: any) => "string" === typeof input.id && true;
    return "object" === typeof input && null !== input && $io0(input);
}, ObjectClosure.SPOILERS);
