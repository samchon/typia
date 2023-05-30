import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { DefinitionArrayRecursiveNullable } from "../../structures/DefinitionArrayRecursiveNullable";

export const test_clone_DefinitionArrayRecursiveNullable = _test_clone(
    "DefinitionArrayRecursiveNullable",
    DefinitionArrayRecursiveNullable.generate,
    (input) => typia.clone(input),
);
