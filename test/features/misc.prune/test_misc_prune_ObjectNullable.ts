import typia from "../../../src";
import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_misc_prune_ObjectNullable = _test_misc_prune(
  "ObjectNullable",
)<ObjectNullable>(ObjectNullable)((input) =>
  typia.misc.prune<ObjectNullable>(input),
);
