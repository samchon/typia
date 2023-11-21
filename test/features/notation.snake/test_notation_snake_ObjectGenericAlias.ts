import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_notation_validateSnake_ObjectGenericAlias =
  _test_notation_validateGeneral("ObjectGenericAlias")<ObjectGenericAlias>(
    ObjectGenericAlias,
  )<typia.SnakeCase<ObjectGenericAlias>>({
    convert: (input) =>
      typia.notations.validateSnake<ObjectGenericAlias>(input),
    assert: typia.createAssert<typia.SnakeCase<ObjectGenericAlias>>(),
  });
