import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { DefinitionArrayRecursiveRequired } from "../../structures/DefinitionArrayRecursiveRequired";

export const test_createIs_DefinitionArrayRecursiveRequired = _test_is(
    "DefinitionArrayRecursiveRequired",
    DefinitionArrayRecursiveRequired.generate,
    typia.createIs<DefinitionArrayRecursiveRequired>(),
    DefinitionArrayRecursiveRequired.SPOILERS,
);
