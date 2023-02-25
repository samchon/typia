import typia from "../../../src";
import { ObjectAlias } from "../../structures/ObjectAlias";
import { _test_equals } from "../internal/_test_equals";
export const test_equals_ObjectAlias = _test_equals("ObjectAlias", ObjectAlias.generate, (input) => ((input: any, _exceptionable: boolean): input is ObjectAlias => {
    const $io0 = (input: any, _exceptionable: boolean) => "string" === typeof input.id && "string" === typeof input.email && "string" === typeof input.name && (1 === input.sex || 2 === input.sex || "male" === input.sex || "female" === input.sex) && "number" === typeof input.age && "boolean" === typeof input.dead && (6 === Object.keys(input).length || Object.keys(input).every(key => {
        if (["id", "email", "name", "sex", "age", "dead"].some(prop => key === prop))
            return true;
        const value = input[key];
        if (undefined === value)
            return true;
        return false;
    }));
    return Array.isArray(input) && input.every((elem: any, _index1: number) => "object" === typeof elem && null !== elem && $io0(elem, true));
})(input));
