import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_equals_ObjectHttpArray = _test_equals(
  "ObjectHttpArray",
)<ObjectHttpArray>(ObjectHttpArray)((input) =>
  typia.equals<ObjectHttpArray>(input),
);
