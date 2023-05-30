import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { DefinitionArrayRecursiveNullable } from "../../structures/DefinitionArrayRecursiveNullable";

export const test_assertStringify_DefinitionArrayRecursiveNullable =
    _test_assertStringify(
        "DefinitionArrayRecursiveNullable",
        DefinitionArrayRecursiveNullable.generate,
        (input) => typia.assertStringify(input),
        DefinitionArrayRecursiveNullable.SPOILERS,
    );
