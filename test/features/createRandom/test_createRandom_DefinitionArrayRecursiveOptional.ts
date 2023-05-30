import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { DefinitionArrayRecursiveOptional } from "../../structures/DefinitionArrayRecursiveOptional";

export const test_createRandom_DefinitionArrayRecursiveOptional = _test_random(
    "DefinitionArrayRecursiveOptional",
    typia.createRandom<DefinitionArrayRecursiveOptional>(),
    typia.createAssert<typia.Primitive<DefinitionArrayRecursiveOptional>>(),
);
