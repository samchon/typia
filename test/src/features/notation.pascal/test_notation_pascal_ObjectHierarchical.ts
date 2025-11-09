import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_notation_validatePascal_ObjectHierarchical = (): void =>
    _test_notation_validateGeneral("ObjectHierarchical")<ObjectHierarchical>(
        ObjectHierarchical
  )<typia.PascalCase<ObjectHierarchical>>({
    convert: (input) => typia.notations.validatePascal<ObjectHierarchical>(input),
    assert: typia.createAssert<typia.PascalCase<ObjectHierarchical>>(),
  });
