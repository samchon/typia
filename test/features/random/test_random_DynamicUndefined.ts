import typia from "../../../src";
import { DynamicUndefined } from "../../structures/DynamicUndefined";
import { _test_random } from "../internal/_test_random";

export const test_random_DynamicUndefined = _test_random(
    "DynamicUndefined",
    () => typia.random<DynamicUndefined>(),
    typia.createAssert<DynamicUndefined>(),
);
