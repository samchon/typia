import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_createAssert_TypeTagFormat = _test_assert(
  "TypeTagFormat",
)<TypeTagFormat>(TypeTagFormat)(typia.createAssert<TypeTagFormat>());
