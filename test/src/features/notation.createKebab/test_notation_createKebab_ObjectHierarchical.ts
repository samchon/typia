import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_notation_createValidateKebab_ObjectHierarchical = (): void =>
  _test_notation_validateGeneral("ObjectHierarchical")<ObjectHierarchical>(
    ObjectHierarchical,
  )<typia.KebabCase<ObjectHierarchical>>({
    convert: typia.notations.createValidateKebab<ObjectHierarchical>(),
    assert: typia.createAssert<typia.KebabCase<ObjectHierarchical>>(),
  });
