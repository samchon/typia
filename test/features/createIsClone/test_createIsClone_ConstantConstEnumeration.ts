import TSON from "../../../src";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";
import { _test_isClone } from "../internal/_test_isClone";

export const test_createIsClone_ConstantConstEnumeration = _test_isClone(
    "ConstantConstEnumeration",
    ConstantConstEnumeration.generate,
    TSON.createIsClone<ConstantConstEnumeration>(),
    ConstantConstEnumeration.SPOILERS,
);
