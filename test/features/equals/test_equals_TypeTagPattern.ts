import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_equals_TypeTagPattern = _test_equals(
  "TypeTagPattern",
)<TypeTagPattern>(TypeTagPattern)((input) =>
  typia.equals<TypeTagPattern>(input),
);
