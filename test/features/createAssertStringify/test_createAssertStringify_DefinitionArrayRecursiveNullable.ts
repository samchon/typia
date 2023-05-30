import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { DefinitionArrayRecursiveNullable } from "../../structures/DefinitionArrayRecursiveNullable";

export const test_createAssertStringify_DefinitionArrayRecursiveNullable =
    _test_assertStringify(
        "DefinitionArrayRecursiveNullable",
        DefinitionArrayRecursiveNullable.generate,
        typia.createAssertStringify<DefinitionArrayRecursiveNullable>(),
        DefinitionArrayRecursiveNullable.SPOILERS,
    );
