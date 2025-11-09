import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_functional_validateEqualsParameters_ObjectHierarchical =
  (): void =>
    _test_functional_validateEqualsParameters("ObjectHierarchical")(
      ObjectHierarchical,
    )((p: (input: ObjectHierarchical) => ObjectHierarchical) =>
      typia.functional.validateEqualsParameters(p),
    );
