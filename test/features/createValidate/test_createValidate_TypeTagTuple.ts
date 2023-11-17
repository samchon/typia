import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_createValidate_TypeTagTuple = _test_validate(
  "TypeTagTuple",
)<TypeTagTuple>(TypeTagTuple)(typia.createValidate<TypeTagTuple>());
