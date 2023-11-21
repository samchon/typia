import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_validateEquals_ConstantAtomicUnion = _test_validateEquals(
  "ConstantAtomicUnion",
)<ConstantAtomicUnion>(ConstantAtomicUnion)((input) =>
  typia.validateEquals<ConstantAtomicUnion>(input),
);
