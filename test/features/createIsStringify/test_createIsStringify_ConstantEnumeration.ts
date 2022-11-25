import TSON from "../../../src";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_createIsStringify_ConstantEnumeration = _test_isStringify(
    "ConstantEnumeration",
    ConstantEnumeration.generate,
    TSON.createIsStringify<ConstantEnumeration>(),
    ConstantEnumeration.SPOILERS,
);
