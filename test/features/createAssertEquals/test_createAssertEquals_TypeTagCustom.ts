import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_createAssertEquals_TypeTagCustom = _test_assertEquals(
  "TypeTagCustom",
)<TypeTagCustom>(TypeTagCustom)(typia.createAssertEquals<TypeTagCustom>());
