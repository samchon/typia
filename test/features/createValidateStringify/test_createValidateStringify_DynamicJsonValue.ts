import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { DynamicJsonValue } from "../../structures/DynamicJsonValue";

export const test_createValidateStringify_DynamicJsonValue =
    _test_validateStringify(
        "DynamicJsonValue",
        DynamicJsonValue.generate,
        typia.createValidateStringify<DynamicJsonValue>(),
        DynamicJsonValue.SPOILERS,
    );
