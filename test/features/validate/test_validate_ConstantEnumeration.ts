import TSON from "../../../src";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_ConstantEnumeration = _test_validate(
    "ConstantEnumeration",
    ConstantEnumeration.generate,
    (input) => TSON.validate(input),
    ConstantEnumeration.SPOILERS,
);
