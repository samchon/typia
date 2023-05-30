import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { DefinitionJsonValue } from "../../structures/DefinitionJsonValue";

export const test_validate_DefinitionJsonValue = _test_validate(
    "DefinitionJsonValue",
    DefinitionJsonValue.generate,
    (input) => typia.validate(input),
    DefinitionJsonValue.SPOILERS,
);
