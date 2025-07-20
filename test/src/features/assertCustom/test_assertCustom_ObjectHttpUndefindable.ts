import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_assertCustom_ObjectHttpUndefindable = (): void =>
  _test_assert(CustomGuardError)(
    "ObjectHttpUndefindable",
  )<ObjectHttpUndefindable>(ObjectHttpUndefindable)((input) =>
    typia.assert<ObjectHttpUndefindable>(input, (p) => new CustomGuardError(p)),
  );
