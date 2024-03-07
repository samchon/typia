import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertEqualsCustom_ObjectUnionDouble =
  _test_assertEquals(CustomGuardError)("ObjectUnionDouble")<ObjectUnionDouble>(
    ObjectUnionDouble,
  )(
    typia.createAssertEquals<ObjectUnionDouble>((p) => new CustomGuardError(p)),
  );
