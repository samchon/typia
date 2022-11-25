import TSON from "../../../src";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_dynamic_enumeration = _test_assert(
    "dynamic enumeration",
    DynamicEnumeration.generate,
    (input) => TSON.assert(input),
    DynamicEnumeration.SPOILERS,
);
