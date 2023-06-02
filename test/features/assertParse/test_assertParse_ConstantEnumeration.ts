import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_assertParse_ConstantEnumeration = _test_assertParse(
    "ConstantEnumeration",
    ConstantEnumeration.generate,
    (input) => typia.assertParse<ConstantEnumeration>(input),
    ConstantEnumeration.SPOILERS,
);
