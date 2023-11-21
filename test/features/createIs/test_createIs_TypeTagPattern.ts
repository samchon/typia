import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_createIs_TypeTagPattern = _test_is(
  "TypeTagPattern",
)<TypeTagPattern>(TypeTagPattern)(typia.createIs<TypeTagPattern>());
