import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_notation_createValidatePascal_ObjectUnionCompositePointer =
  _test_notation_validateGeneral(
    "ObjectUnionCompositePointer",
  )<ObjectUnionCompositePointer>(ObjectUnionCompositePointer)<
    typia.PascalCase<ObjectUnionCompositePointer>
  >({
    convert:
      typia.notations.createValidatePascal<ObjectUnionCompositePointer>(),
    assert: typia.createAssert<typia.PascalCase<ObjectUnionCompositePointer>>(),
  });
