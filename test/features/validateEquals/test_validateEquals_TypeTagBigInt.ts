import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_validateEquals_TypeTagBigInt = _test_validateEquals(
  "TypeTagBigInt",
)<TypeTagBigInt>(TypeTagBigInt)((input) =>
  typia.validateEquals<TypeTagBigInt>(input),
);
