import TSON from "../../../src";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_assertParse_ConstantEnumeration = _test_assertParse(
    "ConstantEnumeration",
    ConstantEnumeration.generate,
    (input) => TSON.assertParse<ConstantEnumeration>(input),
    ConstantEnumeration.SPOILERS,
);
