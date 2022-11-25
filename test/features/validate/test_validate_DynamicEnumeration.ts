import TSON from "../../../src";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_DynamicEnumeration = _test_validate(
    "DynamicEnumeration",
    DynamicEnumeration.generate,
    (input) => TSON.validate(input),
    DynamicEnumeration.SPOILERS,
);