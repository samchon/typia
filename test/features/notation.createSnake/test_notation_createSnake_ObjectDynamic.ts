import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

export const test_notation_createValidateSnake_ObjectDynamic =
  _test_notation_validateGeneral("ObjectDynamic")<ObjectDynamic>(ObjectDynamic)<
    typia.SnakeCase<ObjectDynamic>
  >({
    convert: typia.notations.createValidateSnake<ObjectDynamic>(),
    assert: typia.createAssert<typia.SnakeCase<ObjectDynamic>>(),
  });
