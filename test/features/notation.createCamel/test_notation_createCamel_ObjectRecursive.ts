import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_notation_createValidateCamel_ObjectRecursive =
  _test_notation_validateGeneral("ObjectRecursive")<ObjectRecursive>(
    ObjectRecursive,
  )<typia.CamelCase<ObjectRecursive>>({
    convert: typia.notations.createValidateCamel<ObjectRecursive>(),
    assert: typia.createAssert<typia.CamelCase<ObjectRecursive>>(),
  });
