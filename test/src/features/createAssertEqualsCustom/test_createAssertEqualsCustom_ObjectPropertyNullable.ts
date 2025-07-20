import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_createAssertEqualsCustom_ObjectPropertyNullable = (): void =>
  _test_assertEquals(CustomGuardError)(
    "ObjectPropertyNullable",
  )<ObjectPropertyNullable>(ObjectPropertyNullable)(
    typia.createAssertEquals<ObjectPropertyNullable>(
      (p) => new CustomGuardError(p),
    ),
  );
