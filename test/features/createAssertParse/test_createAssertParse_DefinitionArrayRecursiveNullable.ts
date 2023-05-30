import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { DefinitionArrayRecursiveNullable } from "../../structures/DefinitionArrayRecursiveNullable";

export const test_createAssertParse_DefinitionArrayRecursiveNullable =
    _test_assertParse(
        "DefinitionArrayRecursiveNullable",
        DefinitionArrayRecursiveNullable.generate,
        typia.createAssertParse<DefinitionArrayRecursiveNullable>(),
        DefinitionArrayRecursiveNullable.SPOILERS,
    );
