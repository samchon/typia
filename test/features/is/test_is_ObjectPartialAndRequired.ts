import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_is_ObjectPartialAndRequired = _test_is(
  "ObjectPartialAndRequired",
)<ObjectPartialAndRequired>(ObjectPartialAndRequired)((input) =>
  typia.is<ObjectPartialAndRequired>(input),
);
