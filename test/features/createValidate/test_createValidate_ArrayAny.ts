import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_createValidate_ArrayAny = _test_validate(
  "ArrayAny",
)<ArrayAny>(ArrayAny)(typia.createValidate<ArrayAny>());
