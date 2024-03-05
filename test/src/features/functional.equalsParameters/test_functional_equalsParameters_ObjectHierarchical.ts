import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_functional_equalsParameters_ObjectHierarchical =
  _test_functional_equalsParameters("ObjectHierarchical")(ObjectHierarchical)(
    (p: (input: ObjectHierarchical) => ObjectHierarchical) =>
      typia.functional.equalsParameters(p),
  );
