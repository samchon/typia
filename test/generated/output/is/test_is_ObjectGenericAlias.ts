import typia from "../../../../src";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";
import { _test_is } from "../../../internal/_test_is";
export const test_is_ObjectGenericAlias = _test_is("ObjectGenericAlias", ObjectGenericAlias.generate, (input) => ((input: any): input is ObjectGenericAlias.ISomething<string> => {
    return "object" === typeof input && null !== input && "string" === typeof (input as any).value;
})(input), ObjectGenericAlias.SPOILERS);
