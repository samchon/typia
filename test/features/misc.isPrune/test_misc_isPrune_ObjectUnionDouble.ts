import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_misc_isPrune_ObjectUnionDouble = _test_misc_isPrune(
  "ObjectUnionDouble",
)<ObjectUnionDouble>(ObjectUnionDouble)((input) =>
  typia.misc.isPrune<ObjectUnionDouble>(input),
);
