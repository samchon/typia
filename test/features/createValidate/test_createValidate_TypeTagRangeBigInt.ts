import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

export const test_createValidate_TypeTagRangeBigInt = _test_validate(
  "TypeTagRangeBigInt",
)<TypeTagRangeBigInt>(TypeTagRangeBigInt)(
  typia.createValidate<TypeTagRangeBigInt>(),
);
