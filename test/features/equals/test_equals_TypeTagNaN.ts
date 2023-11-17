import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_equals_TypeTagNaN = _test_equals("TypeTagNaN")<TypeTagNaN>(
  TypeTagNaN,
)((input) => typia.equals<TypeTagNaN>(input));
