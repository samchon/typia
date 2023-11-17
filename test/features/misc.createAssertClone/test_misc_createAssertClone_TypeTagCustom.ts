import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_misc_createAssertClone_TypeTagCustom = _test_misc_assertClone(
  "TypeTagCustom",
)<TypeTagCustom>(TypeTagCustom)(typia.misc.createAssertClone<TypeTagCustom>());
