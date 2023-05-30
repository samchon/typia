import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { DefinitionJsonValue } from "../../structures/DefinitionJsonValue";

export const test_createIsStringify_DefinitionJsonValue = _test_isStringify(
    "DefinitionJsonValue",
    DefinitionJsonValue.generate,
    typia.createIsStringify<DefinitionJsonValue>(),
    DefinitionJsonValue.SPOILERS,
);
