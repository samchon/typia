import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { DefinitionJsonValue } from "../../structures/DefinitionJsonValue";

export const test_validateClone_DefinitionJsonValue = _test_validateClone(
    "DefinitionJsonValue",
    DefinitionJsonValue.generate,
    (input) => typia.validateClone(input),
    DefinitionJsonValue.SPOILERS,
);
