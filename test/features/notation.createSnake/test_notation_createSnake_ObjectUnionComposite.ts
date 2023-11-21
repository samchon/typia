import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_notation_createValidateSnake_ObjectUnionComposite =
  _test_notation_validateGeneral("ObjectUnionComposite")<ObjectUnionComposite>(
    ObjectUnionComposite,
  )<typia.SnakeCase<ObjectUnionComposite>>({
    convert: typia.notations.createValidateSnake<ObjectUnionComposite>(),
    assert: typia.createAssert<typia.SnakeCase<ObjectUnionComposite>>(),
  });
