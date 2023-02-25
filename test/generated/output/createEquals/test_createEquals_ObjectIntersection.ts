import typia from "../../../src";
import { ObjectIntersection } from "../../structures/ObjectIntersection";
import { _test_equals } from "../internal/_test_equals";
export const test_createEquals_ObjectIntersection = _test_equals("ObjectIntersection", ObjectIntersection.generate, (input: any, _exceptionable: boolean): input is ObjectIntersection => {
    const $io0 = (input: any, _exceptionable: boolean) => "string" === typeof input.email && "string" === typeof input.name && "boolean" === typeof input.vulnerable && (3 === Object.keys(input).length || Object.keys(input).every(key => {
        if (["email", "name", "vulnerable"].some(prop => key === prop))
            return true;
        const value = input[key];
        if (undefined === value)
            return true;
        return false;
    }));
    return "object" === typeof input && null !== input && $io0(input, true);
});
