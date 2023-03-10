import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

export const test_createAssertClone_DynamicUndefined = _test_assertClone(
    "DynamicUndefined",
    DynamicUndefined.generate,
    typia.createAssertClone<DynamicUndefined>(),
    DynamicUndefined.SPOILERS,
);
