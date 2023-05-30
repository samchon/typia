import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { DefinitionArrayRecursiveOptional } from "../../structures/DefinitionArrayRecursiveOptional";

export const test_createIs_DefinitionArrayRecursiveOptional = _test_is(
    "DefinitionArrayRecursiveOptional",
    DefinitionArrayRecursiveOptional.generate,
    typia.createIs<DefinitionArrayRecursiveOptional>(),
    DefinitionArrayRecursiveOptional.SPOILERS,
);
