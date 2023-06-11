import typia from "../../../src";

import { DynamicConstant } from "../../structures/DynamicConstant";
import { _test_validateStringify } from "../../internal/_test_validateStringify";

export const test_createValidateStringify_DynamicConstant = _test_validateStringify(
    "DynamicConstant",
    DynamicConstant.generate,
    typia.createValidateStringify<DynamicConstant>(),
    DynamicConstant.SPOILERS,
);
