import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { DynamicJsonValue } from "../../structures/DynamicJsonValue";

export const test_random_DynamicJsonValue = _test_random(
    "DynamicJsonValue",
    () => typia.random<DynamicJsonValue>(),
    typia.createAssert<typia.Primitive<DynamicJsonValue>>(),
);
