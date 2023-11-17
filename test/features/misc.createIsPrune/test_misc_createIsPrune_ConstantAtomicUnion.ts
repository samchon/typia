import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_misc_createIsPrune_ConstantAtomicUnion = _test_misc_isPrune(
  "ConstantAtomicUnion",
)<ConstantAtomicUnion>(ConstantAtomicUnion)(
  typia.misc.createIsPrune<ConstantAtomicUnion>(),
);
