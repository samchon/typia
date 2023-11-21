import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_createAssert_TypeTagLength = _test_assert(
  "TypeTagLength",
)<TypeTagLength>(TypeTagLength)(typia.createAssert<TypeTagLength>());
