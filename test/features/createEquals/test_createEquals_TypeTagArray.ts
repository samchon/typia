import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_createEquals_TypeTagArray = _test_equals(
  "TypeTagArray",
)<TypeTagArray>(TypeTagArray)(typia.createEquals<TypeTagArray>());
