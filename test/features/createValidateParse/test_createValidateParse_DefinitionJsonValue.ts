import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { DefinitionJsonValue } from "../../structures/DefinitionJsonValue";

export const test_createValidateParse_DefinitionJsonValue = _test_validateParse(
    "DefinitionJsonValue",
    DefinitionJsonValue.generate,
    typia.createValidateParse<DefinitionJsonValue>(),
    DefinitionJsonValue.SPOILERS,
);
