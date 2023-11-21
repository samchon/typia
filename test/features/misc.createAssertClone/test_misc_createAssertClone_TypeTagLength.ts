import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_misc_createAssertClone_TypeTagLength = _test_misc_assertClone(
  "TypeTagLength",
)<TypeTagLength>(TypeTagLength)(typia.misc.createAssertClone<TypeTagLength>());
