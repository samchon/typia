import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_createValidate_TypeTagInfinite = _test_validate(
  "TypeTagInfinite",
)<TypeTagInfinite>(TypeTagInfinite)(typia.createValidate<TypeTagInfinite>());
