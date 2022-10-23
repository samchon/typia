import TSON from "../../../src";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";
import { _test_assert } from "./../assert/_test_assert";

export const test_create_assert_dynamic_enumeration = _test_assert(
    "dynamic enumeration",
    DynamicEnumeration.generate,
    TSON.createAssertType<DynamicEnumeration>(),
    DynamicEnumeration.SPOILERS,
);
