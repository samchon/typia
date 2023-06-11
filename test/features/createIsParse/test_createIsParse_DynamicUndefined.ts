import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

export const test_createIsParse_DynamicUndefined = _test_isParse(
    "DynamicUndefined",
    DynamicUndefined.generate,
    typia.createIsParse<DynamicUndefined>(),
    DynamicUndefined.SPOILERS,
);
