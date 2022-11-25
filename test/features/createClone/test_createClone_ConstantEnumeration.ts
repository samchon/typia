import TSON from "../../../src";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";
import { _test_clone } from "../internal/_test_clone";

export const test_createClone_ConstantEnumeration = _test_clone(
    "ConstantEnumeration",
    ConstantEnumeration.generate,
    TSON.createClone<ConstantEnumeration>(),
);
