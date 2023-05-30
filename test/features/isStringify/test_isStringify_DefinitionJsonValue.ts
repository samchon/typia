import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { DefinitionJsonValue } from "../../structures/DefinitionJsonValue";

export const test_isStringify_DefinitionJsonValue = _test_isStringify(
    "DefinitionJsonValue",
    DefinitionJsonValue.generate,
    (input) => typia.isStringify(input),
    DefinitionJsonValue.SPOILERS,
);
