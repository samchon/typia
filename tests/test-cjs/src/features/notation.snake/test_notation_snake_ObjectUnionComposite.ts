import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_notation_validateSnake_ObjectUnionComposite = (): void =>
  _test_notation_validateGeneral("ObjectUnionComposite")<ObjectUnionComposite>(
    ObjectUnionComposite,
  )<typia.SnakeCase<ObjectUnionComposite>>({
    convert: (input) =>
      typia.notations.validateSnake<ObjectUnionComposite>(input),
    assert: typia.createAssert<typia.SnakeCase<ObjectUnionComposite>>(),
  });
