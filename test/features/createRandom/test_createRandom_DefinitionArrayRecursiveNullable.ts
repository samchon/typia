import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { DefinitionArrayRecursiveNullable } from "../../structures/DefinitionArrayRecursiveNullable";

export const test_createRandom_DefinitionArrayRecursiveNullable = _test_random(
    "DefinitionArrayRecursiveNullable",
    typia.createRandom<DefinitionArrayRecursiveNullable>(),
    typia.createAssert<typia.Primitive<DefinitionArrayRecursiveNullable>>(),
);
