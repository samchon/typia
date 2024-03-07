import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_createAssertCloneCustom_ObjectHierarchical =
  _test_misc_assertClone(CustomGuardError)(
    "ObjectHierarchical",
  )<ObjectHierarchical>(ObjectHierarchical)(
    typia.misc.createAssertClone<ObjectHierarchical>(
      (p) => new CustomGuardError(p),
    ),
  );
