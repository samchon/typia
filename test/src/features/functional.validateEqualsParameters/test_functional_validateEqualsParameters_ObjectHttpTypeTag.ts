import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_functional_validateEqualsParameters_ObjectHttpTypeTag =
  _test_functional_validateEqualsParameters("ObjectHttpTypeTag")(
    ObjectHttpTypeTag,
  )((p: (input: ObjectHttpTypeTag) => ObjectHttpTypeTag) =>
    typia.functional.validateEqualsParameters(p),
  );
