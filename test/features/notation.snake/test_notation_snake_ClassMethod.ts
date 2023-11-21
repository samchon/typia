import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_notation_validateSnake_ClassMethod =
  _test_notation_validateGeneral("ClassMethod")<ClassMethod>(ClassMethod)<
    typia.SnakeCase<ClassMethod>
  >({
    convert: (input) => typia.notations.validateSnake<ClassMethod>(input),
    assert: typia.createAssert<typia.SnakeCase<ClassMethod>>(),
  });
