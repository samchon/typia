import typia from "../../../../src";
import { _test_isParse } from "../../../internal/_test_isParse";
import { ObjectAlias } from "../../../structures/ObjectAlias";
export const test_createIsParse_ObjectAlias = _test_isParse("ObjectAlias", ObjectAlias.generate, (input: any): typia.Primitive<ObjectAlias> => { const is = (input: any): input is ObjectAlias => {
    const $io0 = (input: any): boolean => (null === input.id || "string" === typeof input.id) && "string" === typeof input.email && "string" === typeof input.name && (null === input.sex || 1 === input.sex || 2 === input.sex || "male" === input.sex || "female" === input.sex) && (null === input.age || "number" === typeof input.age && Number.isFinite(input.age)) && (null === input.dead || "boolean" === typeof input.dead);
    return Array.isArray(input) && input.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem));
}; input = JSON.parse(input); return is(input) ? input as any : null; }, ObjectAlias.SPOILERS);
