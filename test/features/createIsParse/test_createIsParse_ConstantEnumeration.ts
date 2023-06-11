import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_createIsParse_ConstantEnumeration = _test_isParse(
    "ConstantEnumeration",
    ConstantEnumeration.generate,
    typia.createIsParse<ConstantEnumeration>(),
    ConstantEnumeration.SPOILERS,
);
