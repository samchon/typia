import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_functional_validateEqualsParameters_ObjectUnionComposite =
  _test_functional_validateEqualsParameters("ObjectUnionComposite")(
    ObjectUnionComposite,
  )((p: (input: ObjectUnionComposite) => ObjectUnionComposite) =>
    typia.functional.validateEqualsParameters(p),
  );
