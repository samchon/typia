import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_notation_validateSnake_ObjectHierarchical = (): void =>
  _test_notation_validateGeneral("ObjectHierarchical")<ObjectHierarchical>(
    ObjectHierarchical,
  )<typia.SnakeCase<ObjectHierarchical>>({
    convert: (input) =>
      typia.notations.validateSnake<ObjectHierarchical>(input),
    assert: typia.createAssert<typia.SnakeCase<ObjectHierarchical>>(),
  });
