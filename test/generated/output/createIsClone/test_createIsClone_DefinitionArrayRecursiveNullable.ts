import typia from "../../../../src";
import { _test_isClone } from "../../../internal/_test_isClone";
import { DefinitionArrayRecursiveNullable } from "../../../structures/DefinitionArrayRecursiveNullable";
export const test_createIsClone_DefinitionArrayRecursiveNullable = _test_isClone("DefinitionArrayRecursiveNullable", DefinitionArrayRecursiveNullable.generate, (input: any): typia.Primitive<DefinitionArrayRecursiveNullable> | null => { const is = (input: any): input is DefinitionArrayRecursiveNullable => {
    const $id0 = (input: any): any => undefined !== input && (null === input || "string" === typeof input || "number" === typeof input && Number.isFinite(input) || Array.isArray(input) && input.every((elem: any) => null !== elem && undefined !== elem && $id0(elem)));
    return undefined !== input && (null === input || "string" === typeof input || "number" === typeof input && Number.isFinite(input) || Array.isArray(input) && input.every((elem: any) => null !== elem && undefined !== elem && $id0(elem)) || $id0(input));
}; const clone = (input: DefinitionArrayRecursiveNullable): typia.Primitive<DefinitionArrayRecursiveNullable> => {
    const $id0 = (input: any): any => undefined !== input && (null === input || "string" === typeof input || "number" === typeof input || Array.isArray(input) && input.every((elem: any) => null !== elem && undefined !== elem && $id0(elem)));
    const $cd0 = (input: any): any => Array.isArray(input) ? input.map((elem: any) => elem as any) : input as any;
    return Array.isArray(input) ? input.map((elem: any) => elem as any) : input as any;
}; if (!is(input))
    return null; const output = clone(input); return output; }, DefinitionArrayRecursiveNullable.SPOILERS);
