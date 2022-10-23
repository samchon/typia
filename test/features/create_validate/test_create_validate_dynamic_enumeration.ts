import TSON from "../../../src";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";
import { _test_validate } from "./../validate/_test_validate";

export const test_create_validate_dynamic_enumeration = _test_validate(
    "dynamic enumeration",
    DynamicEnumeration.generate,
    TSON.createValidate<DynamicEnumeration>(),
    DynamicEnumeration.SPOILERS,
);
