import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_createAssertEquals_ConstantAtomicUnion = _test_assertEquals(
  "ConstantAtomicUnion",
)<ConstantAtomicUnion>(ConstantAtomicUnion)(
  typia.createAssertEquals<ConstantAtomicUnion>(),
);
