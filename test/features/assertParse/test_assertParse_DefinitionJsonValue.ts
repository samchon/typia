import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { DefinitionJsonValue } from "../../structures/DefinitionJsonValue";

export const test_assertParse_DefinitionJsonValue = _test_assertParse(
    "DefinitionJsonValue",
    DefinitionJsonValue.generate,
    (input) => typia.assertParse<DefinitionJsonValue>(input),
    DefinitionJsonValue.SPOILERS,
);
