import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_notation_createValidatePascal_ObjectJsonTag =
  _test_notation_validateGeneral("ObjectJsonTag")<ObjectJsonTag>(ObjectJsonTag)<
    typia.PascalCase<ObjectJsonTag>
  >({
    convert: typia.notations.createValidatePascal<ObjectJsonTag>(),
    assert: typia.createAssert<typia.PascalCase<ObjectJsonTag>>(),
  });
