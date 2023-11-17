import typia from "../../../src";
import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_misc_prune_ObjectGenericUnion = _test_misc_prune(
  "ObjectGenericUnion",
)<ObjectGenericUnion>(ObjectGenericUnion)((input) =>
  typia.misc.prune<ObjectGenericUnion>(input),
);
