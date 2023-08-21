import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

export const test_random_DynamicUndefined = _test_random(
    "DynamicUndefined",
)<DynamicUndefined>(DynamicUndefined)({
    random: () => typia.random<DynamicUndefined>(),
    assert: typia.createAssert<DynamicUndefined>(),
});
