import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_notation_validateSnake_ObjectRecursive =
  _test_notation_validateGeneral("ObjectRecursive")<ObjectRecursive>(
    ObjectRecursive,
  )<typia.SnakeCase<ObjectRecursive>>({
    convert: (input) => typia.notations.validateSnake<ObjectRecursive>(input),
    assert: typia.createAssert<typia.SnakeCase<ObjectRecursive>>(),
  });
