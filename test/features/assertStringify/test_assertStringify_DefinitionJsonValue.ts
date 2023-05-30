import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { DefinitionJsonValue } from "../../structures/DefinitionJsonValue";

export const test_assertStringify_DefinitionJsonValue = _test_assertStringify(
    "DefinitionJsonValue",
    DefinitionJsonValue.generate,
    (input) => typia.assertStringify(input),
    DefinitionJsonValue.SPOILERS,
);
