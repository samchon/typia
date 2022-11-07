import TSON from "../../../src";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";
import { _test_assert_type } from "./../assert_type/_test_assert_type";

export const test_create_assert_type_dynamic_enumeration = _test_assert_type(
    "dynamic enumeration",
    DynamicEnumeration.generate,
    TSON.createAssertType<DynamicEnumeration>(),
    DynamicEnumeration.SPOILERS,
);
