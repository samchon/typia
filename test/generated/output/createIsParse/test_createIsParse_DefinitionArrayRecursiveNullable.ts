import typia from "../../../../src";
import { _test_isParse } from "../../../internal/_test_isParse";
import { DefinitionArrayRecursiveNullable } from "../../../structures/DefinitionArrayRecursiveNullable";
export const test_createIsParse_DefinitionArrayRecursiveNullable = _test_isParse("DefinitionArrayRecursiveNullable", DefinitionArrayRecursiveNullable.generate, (input: any): typia.Primitive<DefinitionArrayRecursiveNullable> => { const is = (input: any): input is DefinitionArrayRecursiveNullable => {
    const $id0 = (input: any): any => undefined !== input && (null === input || "string" === typeof input || "number" === typeof input && Number.isFinite(input) || Array.isArray(input) && input.every((elem: any) => null !== elem && undefined !== elem && $id0(elem)));
    return undefined !== input && (null === input || "string" === typeof input || "number" === typeof input && Number.isFinite(input) || Array.isArray(input) && input.every((elem: any) => null !== elem && undefined !== elem && $id0(elem)) || $id0(input));
}; input = JSON.parse(input); return is(input) ? input as any : null; }, DefinitionArrayRecursiveNullable.SPOILERS);
