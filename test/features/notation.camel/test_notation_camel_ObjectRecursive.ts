import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_notation_validateCamel_ObjectRecursive =
  _test_notation_validateGeneral("ObjectRecursive")<ObjectRecursive>(
    ObjectRecursive,
  )<typia.CamelCase<ObjectRecursive>>({
    convert: (input) => typia.notations.validateCamel<ObjectRecursive>(input),
    assert: typia.createAssert<typia.CamelCase<ObjectRecursive>>(),
  });
