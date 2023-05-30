import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { DefinitionArrayRecursiveNullable } from "../../structures/DefinitionArrayRecursiveNullable";

export const test_stringify_DefinitionArrayRecursiveNullable = _test_stringify(
    "DefinitionArrayRecursiveNullable",
    DefinitionArrayRecursiveNullable.generate,
    (input) => typia.stringify(input),
);
