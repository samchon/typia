import TSON from "../../../src";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_assertClone_ConstantConstEnumeration = _test_assertClone(
    "ConstantConstEnumeration",
    ConstantConstEnumeration.generate,
    (input) => TSON.assertClone(input),
    ConstantConstEnumeration.SPOILERS,
);
