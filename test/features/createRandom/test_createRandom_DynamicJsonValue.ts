import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { DynamicJsonValue } from "../../structures/DynamicJsonValue";

export const test_random_DynamicJsonValue = _test_random<DynamicJsonValue>(
    DynamicJsonValue,
)({
    random: typia.createRandom<DynamicJsonValue>(),
    assert: typia.createAssert<DynamicJsonValue>(),
});
