import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_is_TypeTagNaN = _test_is("TypeTagNaN")<TypeTagNaN>(
  TypeTagNaN,
)((input) => typia.is<TypeTagNaN>(input));
