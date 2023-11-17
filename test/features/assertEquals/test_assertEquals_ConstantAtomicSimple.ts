import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_assertEquals_ConstantAtomicSimple = _test_assertEquals(
  "ConstantAtomicSimple",
)<ConstantAtomicSimple>(ConstantAtomicSimple)((input) =>
  typia.assertEquals<ConstantAtomicSimple>(input),
);
