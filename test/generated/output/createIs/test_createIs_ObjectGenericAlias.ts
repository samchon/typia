import typia from "../../../../src";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";
import { _test_is } from "../../../internal/_test_is";
export const test_createIs_ObjectGenericAlias = _test_is("ObjectGenericAlias", ObjectGenericAlias.generate, (input: any): input is ObjectGenericAlias => {
    return "object" === typeof input && null !== input && "string" === typeof (input as any).value;
}, ObjectGenericAlias.SPOILERS);
