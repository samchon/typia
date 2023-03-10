import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_createIsPrune_ConstantConstEnumeration = _test_isPrune(
    "ConstantConstEnumeration",
    ConstantConstEnumeration.generate,
    typia.createIsPrune<ConstantConstEnumeration>(),
    ConstantConstEnumeration.SPOILERS,
);
