import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_createEquals_ObjectHttpArray = _test_equals(
  "ObjectHttpArray",
)<ObjectHttpArray>(ObjectHttpArray)(typia.createEquals<ObjectHttpArray>());
