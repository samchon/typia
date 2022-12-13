import typia from "../../../src";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";
import { _test_isParse } from "../internal/_test_isParse";

export const test_isParse_ConstantEnumeration = _test_isParse(
    "ConstantEnumeration",
    ConstantEnumeration.generate,
    (input) => typia.isParse<ConstantEnumeration>(input),
    ConstantEnumeration.SPOILERS,
);