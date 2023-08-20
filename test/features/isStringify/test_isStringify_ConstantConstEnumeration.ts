import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_isStringify_ConstantConstEnumeration = _test_isStringify(
    "ConstantConstEnumeration",
    ConstantConstEnumeration.generate,
    (input) => typia.isStringify<ConstantConstEnumeration>(input),
    ConstantConstEnumeration.SPOILERS,
);
