import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_createEquals_ConstantEnumeration = _test_equals(
    "ConstantEnumeration",
)<ConstantEnumeration>(ConstantEnumeration)(
    typia.createEquals<ConstantEnumeration>(),
);
