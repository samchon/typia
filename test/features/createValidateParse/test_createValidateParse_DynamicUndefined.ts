import typia from "typia";

import { DynamicUndefined } from "../../structures/DynamicUndefined";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_createValidateParse_DynamicUndefined = _test_validateParse(
    "DynamicUndefined",
    DynamicUndefined.generate,
    typia.createValidateParse<DynamicUndefined>(),
    DynamicUndefined.SPOILERS,
);
