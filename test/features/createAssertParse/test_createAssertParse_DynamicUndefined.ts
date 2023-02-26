import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

export const test_createAssertParse_DynamicUndefined = _test_assertParse(
    "DynamicUndefined",
    DynamicUndefined.generate,
    typia.createAssertParse<DynamicUndefined>(),
    DynamicUndefined.SPOILERS,
);
