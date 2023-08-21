import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_random_DynamicEnumeration = _test_random(
    "DynamicEnumeration",
)<DynamicEnumeration>(DynamicEnumeration)({
    random: () => typia.random<DynamicEnumeration>(),
    assert: typia.createAssert<DynamicEnumeration>(),
});
