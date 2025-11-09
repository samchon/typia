import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_notation_createValidateCamel_ObjectHierarchical = (): void =>
    _test_notation_validateGeneral("ObjectHierarchical")<ObjectHierarchical>(
        ObjectHierarchical
  )<typia.CamelCase<ObjectHierarchical>>({
    convert: typia.notations.createValidateCamel<ObjectHierarchical>(),
    assert: typia.createAssert<typia.CamelCase<ObjectHierarchical>>(),
  });
