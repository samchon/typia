import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { DefinitionArrayRecursiveNullable } from "../../structures/DefinitionArrayRecursiveNullable";

export const test_createStringify_DefinitionArrayRecursiveNullable =
    _test_stringify(
        "DefinitionArrayRecursiveNullable",
        DefinitionArrayRecursiveNullable.generate,
        typia.createStringify<DefinitionArrayRecursiveNullable>(),
    );
