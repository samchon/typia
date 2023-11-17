import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_createValidate_ConstantAtomicUnion = _test_validate(
  "ConstantAtomicUnion",
)<ConstantAtomicUnion>(ConstantAtomicUnion)(
  typia.createValidate<ConstantAtomicUnion>(),
);
