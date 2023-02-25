import typia from "../../../src";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";
import { _test_isPrune } from "../internal/_test_isPrune";

export const test_createIsPrune_ConstantEnumeration = _test_isPrune(
    "ConstantEnumeration",
    ConstantEnumeration.generate,
    typia.createIsPrune<ConstantEnumeration>(),
    ConstantEnumeration.SPOILERS,
);
