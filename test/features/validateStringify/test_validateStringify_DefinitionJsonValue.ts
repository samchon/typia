import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { DefinitionJsonValue } from "../../structures/DefinitionJsonValue";

export const test_validateStringify_DefinitionJsonValue =
    _test_validateStringify(
        "DefinitionJsonValue",
        DefinitionJsonValue.generate,
        (input) => typia.validateStringify(input),
        DefinitionJsonValue.SPOILERS,
    );
