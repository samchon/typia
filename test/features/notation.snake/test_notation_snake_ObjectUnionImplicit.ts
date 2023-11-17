import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_notation_validateSnake_ObjectUnionImplicit =
  _test_notation_validateGeneral("ObjectUnionImplicit")<ObjectUnionImplicit>(
    ObjectUnionImplicit,
  )<typia.SnakeCase<ObjectUnionImplicit>>({
    convert: (input) =>
      typia.notations.validateSnake<ObjectUnionImplicit>(input),
    assert: typia.createAssert<typia.SnakeCase<ObjectUnionImplicit>>(),
  });
