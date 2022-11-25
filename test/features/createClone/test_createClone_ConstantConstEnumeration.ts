import TSON from "../../../src";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";
import { _test_clone } from "../internal/_test_clone";

export const test_createClone_ConstantConstEnumeration = _test_clone(
    "ConstantConstEnumeration",
    ConstantConstEnumeration.generate,
    TSON.createClone<ConstantConstEnumeration>(),
);
