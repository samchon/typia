import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

export const test_createValidateParse_DynamicUndefined = _test_validateParse(
    "DynamicUndefined",
    DynamicUndefined.generate,
    typia.createValidateParse<DynamicUndefined>(),
    DynamicUndefined.SPOILERS,
);
