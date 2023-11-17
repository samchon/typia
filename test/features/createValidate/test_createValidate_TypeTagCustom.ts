import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_createValidate_TypeTagCustom = _test_validate(
  "TypeTagCustom",
)<TypeTagCustom>(TypeTagCustom)(typia.createValidate<TypeTagCustom>());
