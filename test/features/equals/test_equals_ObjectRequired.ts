import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_equals_ObjectRequired = _test_equals(
  "ObjectRequired",
)<ObjectRequired>(ObjectRequired)((input) =>
  typia.equals<ObjectRequired>(input),
);
