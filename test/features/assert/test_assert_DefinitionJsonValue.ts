import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { DefinitionJsonValue } from "../../structures/DefinitionJsonValue";

export const test_assert_DefinitionJsonValue = _test_assert(
    "DefinitionJsonValue",
    DefinitionJsonValue.generate,
    (input) => typia.assert(input),
    DefinitionJsonValue.SPOILERS,
);
