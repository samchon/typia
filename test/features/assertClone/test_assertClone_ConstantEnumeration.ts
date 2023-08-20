import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_assertClone_ConstantEnumeration = _test_assertClone(
    "ConstantEnumeration",
    ConstantEnumeration.generate,
    (input) => typia.assertClone<ConstantEnumeration>(input),
    ConstantEnumeration.SPOILERS,
);
