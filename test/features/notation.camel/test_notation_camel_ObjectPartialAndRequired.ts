import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_notation_validateCamel_ObjectPartialAndRequired =
  _test_notation_validateGeneral(
    "ObjectPartialAndRequired",
  )<ObjectPartialAndRequired>(ObjectPartialAndRequired)<
    typia.CamelCase<ObjectPartialAndRequired>
  >({
    convert: (input) =>
      typia.notations.validateCamel<ObjectPartialAndRequired>(input),
    assert: typia.createAssert<typia.CamelCase<ObjectPartialAndRequired>>(),
  });
