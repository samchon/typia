import TSON from "../../../src";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";
import { _test_assert_type } from "../internal/_test_assert_type";

export const test_assert_type_dynamic_enumeration = _test_assert_type(
    "dynamic enumeration",
    DynamicEnumeration.generate,
    (input) => TSON.assertType(input),
    DynamicEnumeration.SPOILERS,
);
