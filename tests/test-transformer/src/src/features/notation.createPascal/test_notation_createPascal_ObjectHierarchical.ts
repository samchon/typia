import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_notation_createValidatePascal_ObjectHierarchical = (): void =>
    _test_notation_validateGeneral("ObjectHierarchical")<ObjectHierarchical>(
        ObjectHierarchical
  )<typia.PascalCase<ObjectHierarchical>>({
    convert: typia.notations.createValidatePascal<ObjectHierarchical>(),
    assert: typia.createAssert<typia.PascalCase<ObjectHierarchical>>(),
  });
