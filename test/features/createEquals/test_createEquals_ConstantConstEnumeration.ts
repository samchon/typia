import typia from "../../../src";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";
import { _test_equals } from "../internal/_test_equals";

export const test_createEquals_ConstantConstEnumeration = _test_equals(
    "ConstantConstEnumeration",
    ConstantConstEnumeration.generate,
    typia.createEquals<ConstantConstEnumeration>(),
);
