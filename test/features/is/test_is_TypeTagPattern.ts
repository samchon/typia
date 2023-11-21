import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_is_TypeTagPattern = _test_is(
  "TypeTagPattern",
)<TypeTagPattern>(TypeTagPattern)((input) => typia.is<TypeTagPattern>(input));
