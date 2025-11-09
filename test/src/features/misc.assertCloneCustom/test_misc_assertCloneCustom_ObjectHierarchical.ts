import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_misc_assertCloneCustom_ObjectHierarchical = (): void =>
  _test_misc_assertClone(CustomGuardError)(
    "ObjectHierarchical",
  )<ObjectHierarchical>(ObjectHierarchical)((input) =>
    typia.misc.assertClone<ObjectHierarchical>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
