import typia from "../../../src";
import { ObjectAlias } from "../../structures/ObjectAlias";
import { _test_is } from "../internal/_test_is";
export const test_createIs_ObjectAlias = _test_is("ObjectAlias", ObjectAlias.generate, (input: any): input is ObjectAlias => {
    const $io0 = (input: any) => "string" === typeof input.id && "string" === typeof input.email && "string" === typeof input.name && (1 === input.sex || 2 === input.sex || "male" === input.sex || "female" === input.sex) && "number" === typeof input.age && "boolean" === typeof input.dead;
    return Array.isArray(input) && input.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem));
}, ObjectAlias.SPOILERS);
