import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_assertCustom_ObjectUnionComposite = (): void =>
  _test_assert(CustomGuardError)("ObjectUnionComposite")<ObjectUnionComposite>(
    ObjectUnionComposite,
  )((input) =>
    typia.assert<ObjectUnionComposite>(input, (p) => new CustomGuardError(p)),
  );
