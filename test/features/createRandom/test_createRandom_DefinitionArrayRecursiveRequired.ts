import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { DefinitionArrayRecursiveRequired } from "../../structures/DefinitionArrayRecursiveRequired";

export const test_createRandom_DefinitionArrayRecursiveRequired = _test_random(
    "DefinitionArrayRecursiveRequired",
    typia.createRandom<DefinitionArrayRecursiveRequired>(),
    typia.createAssert<typia.Primitive<DefinitionArrayRecursiveRequired>>(),
);
