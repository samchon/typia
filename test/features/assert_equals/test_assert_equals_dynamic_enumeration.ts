import TSON from "../../../src";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";
import { _test_assert_equals } from "../internal/_test_assert_equals";

export const test_assert_equals_dynamic_enumeration = _test_assert_equals(
    "dynamic enumeration",
    DynamicEnumeration.generate,
    (input) => TSON.assertEquals(input),
);
