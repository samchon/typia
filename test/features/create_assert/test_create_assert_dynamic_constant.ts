import TSON from "../../../src";
import { DynamicConstant } from "../../structures/DynamicConstant";
import { _test_assert } from "./../assert/_test_assert";

export const test_create_assert_dynamic_constant = _test_assert(
    "dynamic constant",
    DynamicConstant.generate,
    TSON.createAssertType<DynamicConstant>(),
    DynamicConstant.SPOILERS,
);
