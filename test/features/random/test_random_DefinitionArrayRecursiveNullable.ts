import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { DefinitionArrayRecursiveNullable } from "../../structures/DefinitionArrayRecursiveNullable";

export const test_random_DefinitionArrayRecursiveNullable = _test_random(
    "DefinitionArrayRecursiveNullable",
    () => typia.random<DefinitionArrayRecursiveNullable>(),
    typia.createAssert<typia.Primitive<DefinitionArrayRecursiveNullable>>(),
);
