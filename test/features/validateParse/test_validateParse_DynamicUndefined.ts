import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

export const test_validateParse_DynamicUndefined = _test_validateParse(
    "DynamicUndefined",
    DynamicUndefined.generate,
    (input) => typia.validateParse<DynamicUndefined>(input),
    DynamicUndefined.SPOILERS,
);
