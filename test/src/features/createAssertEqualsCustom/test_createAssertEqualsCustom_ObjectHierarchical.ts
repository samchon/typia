import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_createAssertEqualsCustom_ObjectHierarchical = (): void =>
  _test_assertEquals(CustomGuardError)(
    "ObjectHierarchical",
  )<ObjectHierarchical>(ObjectHierarchical)(
    typia.createAssertEquals<ObjectHierarchical>(
      (p) => new CustomGuardError(p),
    ),
  );
