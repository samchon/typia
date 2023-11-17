import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_misc_createAssertClone_TypeTagRange = _test_misc_assertClone(
  "TypeTagRange",
)<TypeTagRange>(TypeTagRange)(typia.misc.createAssertClone<TypeTagRange>());
