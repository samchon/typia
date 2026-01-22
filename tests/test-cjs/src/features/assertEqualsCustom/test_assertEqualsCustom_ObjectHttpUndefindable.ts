import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_assertEqualsCustom_ObjectHttpUndefindable = (): void =>
  _test_assertEquals(CustomGuardError)(
    "ObjectHttpUndefindable",
  )<ObjectHttpUndefindable>(ObjectHttpUndefindable)((input) =>
    typia.assertEquals<ObjectHttpUndefindable>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
