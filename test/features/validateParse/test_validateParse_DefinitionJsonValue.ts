import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { DefinitionJsonValue } from "../../structures/DefinitionJsonValue";

export const test_validateParse_DefinitionJsonValue = _test_validateParse(
    "DefinitionJsonValue",
    DefinitionJsonValue.generate,
    (input) => typia.validateParse<DefinitionJsonValue>(input),
    DefinitionJsonValue.SPOILERS,
);
