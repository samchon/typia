import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { DefinitionJsonValue } from "../../structures/DefinitionJsonValue";

export const test_assertClone_DefinitionJsonValue = _test_assertClone(
    "DefinitionJsonValue",
    DefinitionJsonValue.generate,
    (input) => typia.assertClone(input),
    DefinitionJsonValue.SPOILERS,
);
