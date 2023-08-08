import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_assertEquals_ConstantConstEnumeration = _test_assertEquals(
    "ConstantConstEnumeration",
    ConstantConstEnumeration.generate,
    typia.createAssertEquals<ConstantConstEnumeration>(),
);
