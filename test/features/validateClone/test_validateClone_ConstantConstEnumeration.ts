import TSON from "../../../src";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_validateClone_ConstantConstEnumeration = _test_validateClone(
    "ConstantConstEnumeration",
    ConstantConstEnumeration.generate,
    (input) => TSON.validateClone(input),
    ConstantConstEnumeration.SPOILERS,
);
