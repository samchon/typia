import TSON from "../../../src";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";
import { _test_isClone } from "../internal/_test_isClone";

export const test_createIsClone_ConstantEnumeration = _test_isClone(
    "ConstantEnumeration",
    ConstantEnumeration.generate,
    TSON.createIsClone<ConstantEnumeration>(),
    ConstantEnumeration.SPOILERS,
);