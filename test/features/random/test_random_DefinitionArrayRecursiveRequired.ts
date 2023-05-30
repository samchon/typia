import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { DefinitionArrayRecursiveRequired } from "../../structures/DefinitionArrayRecursiveRequired";

export const test_random_DefinitionArrayRecursiveRequired = _test_random(
    "DefinitionArrayRecursiveRequired",
    () => typia.random<DefinitionArrayRecursiveRequired>(),
    typia.createAssert<typia.Primitive<DefinitionArrayRecursiveRequired>>(),
);
