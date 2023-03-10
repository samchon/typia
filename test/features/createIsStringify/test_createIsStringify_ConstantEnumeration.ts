import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_createIsStringify_ConstantEnumeration = _test_isStringify(
    "ConstantEnumeration",
    ConstantEnumeration.generate,
    typia.createIsStringify<ConstantEnumeration>(),
    ConstantEnumeration.SPOILERS,
);
