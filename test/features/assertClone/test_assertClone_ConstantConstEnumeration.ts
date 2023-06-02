import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_assertClone_ConstantConstEnumeration = _test_assertClone(
    "ConstantConstEnumeration",
    ConstantConstEnumeration.generate,
    (input) => typia.assertClone(input),
    ConstantConstEnumeration.SPOILERS,
);
