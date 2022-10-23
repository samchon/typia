import TSON from "../../../src";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";
import { _test_equals } from "./../equals/_test_equals";

export const test_create_equals_dynamic_enumeration = _test_equals(
    "dynamic enumeration",
    DynamicEnumeration.generate,
    TSON.createEquals<DynamicEnumeration>(),
);
