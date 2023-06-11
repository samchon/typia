import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_assertParse_ConstantConstEnumeration = _test_assertParse(
    "ConstantConstEnumeration",
    ConstantConstEnumeration.generate,
    (input) => typia.assertParse<ConstantConstEnumeration>(input),
    ConstantConstEnumeration.SPOILERS,
);
