import typia from "../../../src";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";
import { _test_equals } from "../internal/_test_equals";
export const test_createEquals_ObjectLiteralType = _test_equals("ObjectLiteralType", ObjectLiteralType.generate, (input: any, _exceptionable: boolean): input is { id: string; name: string; age: number; } => {
    const $io0 = (input: any, _exceptionable: boolean) => "string" === typeof input.id && "string" === typeof input.name && "number" === typeof input.age && (3 === Object.keys(input).length || Object.keys(input).every(key => {
        if (["id", "name", "age"].some(prop => key === prop))
            return true;
        const value = input[key];
        if (undefined === value)
            return true;
        return false;
    }));
    return "object" === typeof input && null !== input && $io0(input, true);
});
