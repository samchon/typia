import typia from "../../../src";
import { ObjectClosure } from "../../structures/ObjectClosure";
import { _test_equals } from "../internal/_test_equals";
export const test_createEquals_ObjectClosure = _test_equals("ObjectClosure", ObjectClosure.generate, (input: any, _exceptionable: boolean): input is IRecord => {
    const $io0 = (input: any, _exceptionable: boolean) => "string" === typeof input.id && true && (2 === Object.keys(input).length || Object.keys(input).every(key => {
        if (["id", "open"].some(prop => key === prop))
            return true;
        const value = input[key];
        if (undefined === value)
            return true;
        return false;
    }));
    return "object" === typeof input && null !== input && $io0(input, true);
});
