import TSON from "../../../src";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";
import { _test_is } from "../internal/_test_is";

export const test_is_ConstantConstEnumeration = _test_is(
    "ConstantConstEnumeration",
    ConstantConstEnumeration.generate,
    (input) => TSON.is(input),
    ConstantConstEnumeration.SPOILERS,
);