import TSON from "../../../src";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";
import { _test_equals } from "../internal/_test_equals";

export const test_createEquals_ConstantEnumeration = _test_equals(
    "ConstantEnumeration",
    ConstantEnumeration.generate,
    TSON.createEquals<ConstantEnumeration>(),
);
