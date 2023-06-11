import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_createAssertParse_ConstantEnumeration = _test_assertParse(
    "ConstantEnumeration",
    ConstantEnumeration.generate,
    typia.createAssertParse<ConstantEnumeration>(),
    ConstantEnumeration.SPOILERS,
);
