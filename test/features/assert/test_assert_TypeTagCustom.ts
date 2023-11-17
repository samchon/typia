import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_assert_TypeTagCustom = _test_assert(
  "TypeTagCustom",
)<TypeTagCustom>(TypeTagCustom)((input) => typia.assert<TypeTagCustom>(input));
