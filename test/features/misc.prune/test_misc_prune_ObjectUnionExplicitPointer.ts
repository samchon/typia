import typia from "../../../src";
import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_misc_prune_ObjectUnionExplicitPointer = _test_misc_prune(
  "ObjectUnionExplicitPointer",
)<ObjectUnionExplicitPointer>(ObjectUnionExplicitPointer)((input) =>
  typia.misc.prune<ObjectUnionExplicitPointer>(input),
);
