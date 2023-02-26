import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { DynamicNever } from "../../structures/DynamicNever";

export const test_createValidateStringify_DynamicNever =
    _test_validateStringify(
        "DynamicNever",
        DynamicNever.generate,
        typia.createValidateStringify<DynamicNever>(),
        DynamicNever.SPOILERS,
    );
