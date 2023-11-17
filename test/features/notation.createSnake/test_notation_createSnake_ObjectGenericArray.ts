import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_notation_createValidateSnake_ObjectGenericArray =
  _test_notation_validateGeneral("ObjectGenericArray")<ObjectGenericArray>(
    ObjectGenericArray,
  )<typia.SnakeCase<ObjectGenericArray>>({
    convert: typia.notations.createValidateSnake<ObjectGenericArray>(),
    assert: typia.createAssert<typia.SnakeCase<ObjectGenericArray>>(),
  });
