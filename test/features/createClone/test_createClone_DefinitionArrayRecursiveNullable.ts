import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { DefinitionArrayRecursiveNullable } from "../../structures/DefinitionArrayRecursiveNullable";

export const test_createClone_DefinitionArrayRecursiveNullable = _test_clone(
    "DefinitionArrayRecursiveNullable",
    DefinitionArrayRecursiveNullable.generate,
    typia.createClone<DefinitionArrayRecursiveNullable>(),
);
