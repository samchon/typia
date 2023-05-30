import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { DefinitionArrayRecursiveOptional } from "../../structures/DefinitionArrayRecursiveOptional";

export const test_random_DefinitionArrayRecursiveOptional = _test_random(
    "DefinitionArrayRecursiveOptional",
    () => typia.random<DefinitionArrayRecursiveOptional>(),
    typia.createAssert<typia.Primitive<DefinitionArrayRecursiveOptional>>(),
);
