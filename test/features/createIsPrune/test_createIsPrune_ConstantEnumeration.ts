import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_createIsPrune_ConstantEnumeration = _test_isPrune(
    "ConstantEnumeration",
    ConstantEnumeration.generate,
    typia.createIsPrune<ConstantEnumeration>(),
    ConstantEnumeration.SPOILERS,
);
