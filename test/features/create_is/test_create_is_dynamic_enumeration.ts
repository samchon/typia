import TSON from "../../../src";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";
import { _test_is } from "../internal/_test_is";

export const test_create_is_dynamic_enumeration = _test_is(
    "dynamic enumeration",
    DynamicEnumeration.generate,
    TSON.createIs<DynamicEnumeration>(),
    DynamicEnumeration.SPOILERS,
);
