import typia from "../../../src";
import { DynamicNever } from "../../structures/DynamicNever";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_createValidateStringify_DynamicNever =
    _test_validateStringify(
        "DynamicNever",
        DynamicNever.generate,
        typia.createValidateStringify<DynamicNever>(),
        DynamicNever.SPOILERS,
    );
