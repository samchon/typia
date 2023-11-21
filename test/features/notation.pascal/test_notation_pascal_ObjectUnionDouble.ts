import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_notation_validatePascal_ObjectUnionDouble =
  _test_notation_validateGeneral("ObjectUnionDouble")<ObjectUnionDouble>(
    ObjectUnionDouble,
  )<typia.PascalCase<ObjectUnionDouble>>({
    convert: (input) =>
      typia.notations.validatePascal<ObjectUnionDouble>(input),
    assert: typia.createAssert<typia.PascalCase<ObjectUnionDouble>>(),
  });
