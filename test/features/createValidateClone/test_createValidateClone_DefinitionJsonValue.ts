import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { DefinitionJsonValue } from "../../structures/DefinitionJsonValue";

export const test_createValidateClone_DefinitionJsonValue = _test_validateClone(
    "DefinitionJsonValue",
    DefinitionJsonValue.generate,
    typia.createValidateClone<DefinitionJsonValue>(),
    DefinitionJsonValue.SPOILERS,
);
