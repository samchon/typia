import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_createValidate_ObjectHttpArray = _test_validate(
  "ObjectHttpArray",
)<ObjectHttpArray>(ObjectHttpArray)(typia.createValidate<ObjectHttpArray>());
