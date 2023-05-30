import typia from "../../../../src";
import { _test_clone } from "../../../internal/_test_clone";
import { DefinitionArrayRecursiveNullable } from "../../../structures/DefinitionArrayRecursiveNullable";
export const test_clone_DefinitionArrayRecursiveNullable = _test_clone("DefinitionArrayRecursiveNullable", DefinitionArrayRecursiveNullable.generate, (input) => ((input: string | number | Array<DefinitionArrayRecursiveNullable> | null): typia.Primitive<string | number | Array<DefinitionArrayRecursiveNullable> | null> => {
    const $id0 = (input: any): any => undefined !== input && (null === input || "string" === typeof input || "number" === typeof input || Array.isArray(input) && input.every((elem: any) => null !== elem && undefined !== elem && $id0(elem)));
    const $cd0 = (input: any): any => Array.isArray(input) ? input.map((elem: any) => elem as any) : input as any;
    return Array.isArray(input) ? input.map((elem: any) => elem as any) : input as any;
})(input));
