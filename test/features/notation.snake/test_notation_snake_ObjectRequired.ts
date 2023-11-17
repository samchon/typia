import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_notation_validateSnake_ObjectRequired =
  _test_notation_validateGeneral("ObjectRequired")<ObjectRequired>(
    ObjectRequired,
  )<typia.SnakeCase<ObjectRequired>>({
    convert: (input) => typia.notations.validateSnake<ObjectRequired>(input),
    assert: typia.createAssert<typia.SnakeCase<ObjectRequired>>(),
  });
