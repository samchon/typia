import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_createEquals_TypeTagFormat = _test_equals(
  "TypeTagFormat",
)<TypeTagFormat>(TypeTagFormat)(typia.createEquals<TypeTagFormat>());
