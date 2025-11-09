import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_createAssertEqualsCustom_ObjectHttpConstant = (): void =>
  _test_assertEquals(CustomGuardError)(
    "ObjectHttpConstant",
  )<ObjectHttpConstant>(ObjectHttpConstant)(
    typia.createAssertEquals<ObjectHttpConstant>(
      (p) => new CustomGuardError(p),
    ),
  );
