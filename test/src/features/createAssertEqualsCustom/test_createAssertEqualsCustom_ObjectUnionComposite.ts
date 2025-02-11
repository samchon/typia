import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_createAssertEqualsCustom_ObjectUnionComposite =
  _test_assertEquals(CustomGuardError)(
    "ObjectUnionComposite",
  )<ObjectUnionComposite>(ObjectUnionComposite)(
    typia.createAssertEquals<ObjectUnionComposite>(
      (p) => new CustomGuardError(p),
    ),
  );
