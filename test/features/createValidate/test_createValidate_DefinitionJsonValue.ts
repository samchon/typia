import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { DefinitionJsonValue } from "../../structures/DefinitionJsonValue";

export const test_createValidate_DefinitionJsonValue = _test_validate(
    "DefinitionJsonValue",
    DefinitionJsonValue.generate,
    typia.createValidate<DefinitionJsonValue>(),
    DefinitionJsonValue.SPOILERS,
);
