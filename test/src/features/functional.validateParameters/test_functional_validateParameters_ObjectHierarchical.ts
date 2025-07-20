import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_functional_validateParameters_ObjectHierarchical = (): void =>
  _test_functional_validateParameters("ObjectHierarchical")(ObjectHierarchical)(
    (p: (input: ObjectHierarchical) => ObjectHierarchical) =>
      typia.functional.validateParameters(p),
  );
