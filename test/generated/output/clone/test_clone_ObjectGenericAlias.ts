import typia from "../../../../src";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";
import { _test_clone } from "../../../internal/_test_clone";
export const test_clone_ObjectGenericAlias = _test_clone("ObjectGenericAlias", ObjectGenericAlias.generate, (input) => ((input: ObjectGenericAlias.ISomething<string>): typia.Primitive<ObjectGenericAlias.ISomething<string>> => {
    const $co0 = (input: any): any => ({
        value: input.value as any
    });
    return "object" === typeof input && null !== input ? $co0(input) : input as any;
})(input));
