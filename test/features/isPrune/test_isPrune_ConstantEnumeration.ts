import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_isPrune_ConstantEnumeration = _test_isPrune(
    "ConstantEnumeration",
    ConstantEnumeration.generate,
    (input) => typia.isPrune<ConstantEnumeration>(input),
    ConstantEnumeration.SPOILERS,
);
