import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_is_TypeTagRange = _test_is("TypeTagRange")<TypeTagRange>(
  TypeTagRange,
)((input) => typia.is<TypeTagRange>(input));
