import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_createAssertEqualsCustom_ObjectHttpUndefindable =
  _test_assertEquals(CustomGuardError)(
    "ObjectHttpUndefindable",
  )<ObjectHttpUndefindable>(ObjectHttpUndefindable)(
    typia.createAssertEquals<ObjectHttpUndefindable>(
      (p) => new CustomGuardError(p),
    ),
  );
