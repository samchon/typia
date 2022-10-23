import TSON from "../../../src";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";
import { _test_assert_equals } from "./../assert_equals/_test_assert_equals";

export const test_create_assert_equals_dynamic_enumeration =
    _test_assert_equals(
        "dynamic enumeration",
        DynamicEnumeration.generate,
        TSON.createAssertEquals<DynamicEnumeration>(),
    );
