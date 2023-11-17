import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_createValidate_TypeTagAtomicUnion = _test_validate(
  "TypeTagAtomicUnion",
)<TypeTagAtomicUnion>(TypeTagAtomicUnion)(
  typia.createValidate<TypeTagAtomicUnion>(),
);
