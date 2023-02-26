import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_createIsParse_ConstantConstEnumeration = _test_isParse(
    "ConstantConstEnumeration",
    ConstantConstEnumeration.generate,
    typia.createIsParse<ConstantConstEnumeration>(),
    ConstantConstEnumeration.SPOILERS,
);
