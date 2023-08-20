import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_assert_ConstantConstEnumeration = _test_assert(
    "ConstantConstEnumeration",
    ConstantConstEnumeration.generate,
    (input) => typia.assert<ConstantConstEnumeration>(input),
    ConstantConstEnumeration.SPOILERS,
);
