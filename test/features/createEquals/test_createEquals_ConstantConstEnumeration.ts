import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_createEquals_ConstantConstEnumeration = _test_equals(
  "ConstantConstEnumeration",
)<ConstantConstEnumeration>(ConstantConstEnumeration)(
  typia.createEquals<ConstantConstEnumeration>(),
);
