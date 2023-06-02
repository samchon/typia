import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { DynamicJsonValue } from "../../structures/DynamicJsonValue";

export const test_createRandom_DynamicJsonValue = _test_random(
    "DynamicJsonValue",
    typia.createRandom<DynamicJsonValue>(),
    typia.createAssert<typia.Primitive<DynamicJsonValue>>(),
);
