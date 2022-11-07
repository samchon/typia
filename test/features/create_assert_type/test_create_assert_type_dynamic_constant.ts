import TSON from "../../../src";
import { DynamicConstant } from "../../structures/DynamicConstant";
import { _test_assert_type } from "./../assert_type/_test_assert_type";

export const test_create_assert_type_dynamic_constant = _test_assert_type(
    "dynamic constant",
    DynamicConstant.generate,
    TSON.createAssertType<DynamicConstant>(),
    DynamicConstant.SPOILERS,
);
