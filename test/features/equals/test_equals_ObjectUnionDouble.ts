import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_equals_ObjectUnionDouble = _test_equals(
  "ObjectUnionDouble",
)<ObjectUnionDouble>(ObjectUnionDouble)((input) =>
  typia.equals<ObjectUnionDouble>(input),
);
