import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_createValidate_ToJsonArray = _test_validate(
  "ToJsonArray",
)<ToJsonArray>(ToJsonArray)(typia.createValidate<ToJsonArray>());
