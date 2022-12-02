import TSON from "../../../src";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_DynamicEnumeration = _test_validate(
    "DynamicEnumeration",
    DynamicEnumeration.generate,
    TSON.createValidate<DynamicEnumeration>(),
    DynamicEnumeration.SPOILERS,
);
