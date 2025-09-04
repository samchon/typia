import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_createAssertEqualsCustom_ObjectPartialAndRequired =
  (): void =>
    _test_assertEquals(CustomGuardError)(
      "ObjectPartialAndRequired",
    )<ObjectPartialAndRequired>(ObjectPartialAndRequired)(
      typia.createAssertEquals<ObjectPartialAndRequired>(
        (p) => new CustomGuardError(p),
      ),
    );
