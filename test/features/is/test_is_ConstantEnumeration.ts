import TSON from "../../../src";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";
import { _test_is } from "../internal/_test_is";

export const test_is_ConstantEnumeration = _test_is(
    "ConstantEnumeration",
    ConstantEnumeration.generate,
    (input) => TSON.is(input),
    ConstantEnumeration.SPOILERS,
);
