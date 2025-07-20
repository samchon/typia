import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_createAssertEqualsCustom_ObjectHttpTypeTag = (): void =>
  _test_assertEquals(CustomGuardError)("ObjectHttpTypeTag")<ObjectHttpTypeTag>(
    ObjectHttpTypeTag,
  )(
    typia.createAssertEquals<ObjectHttpTypeTag>((p) => new CustomGuardError(p)),
  );
