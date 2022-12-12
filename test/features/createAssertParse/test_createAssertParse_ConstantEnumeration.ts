import typia from "../../../src";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_createAssertParse_ConstantEnumeration = _test_assertParse(
    "ConstantEnumeration",
    ConstantEnumeration.generate,
    typia.createAssertParse<ConstantEnumeration>(),
    ConstantEnumeration.SPOILERS,
);
