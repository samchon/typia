import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersCustom_ObjectUnionComposite =
  _test_functional_assertParameters(CustomGuardError)("ObjectUnionComposite")(
    ObjectUnionComposite,
  )((p: (input: ObjectUnionComposite) => ObjectUnionComposite) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
