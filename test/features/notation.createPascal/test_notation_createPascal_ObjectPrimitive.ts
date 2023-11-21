import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_notation_createValidatePascal_ObjectPrimitive =
  _test_notation_validateGeneral("ObjectPrimitive")<ObjectPrimitive>(
    ObjectPrimitive,
  )<typia.PascalCase<ObjectPrimitive>>({
    convert: typia.notations.createValidatePascal<ObjectPrimitive>(),
    assert: typia.createAssert<typia.PascalCase<ObjectPrimitive>>(),
  });
