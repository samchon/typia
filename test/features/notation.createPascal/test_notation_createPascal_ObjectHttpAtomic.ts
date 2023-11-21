import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_notation_createValidatePascal_ObjectHttpAtomic =
  _test_notation_validateGeneral("ObjectHttpAtomic")<ObjectHttpAtomic>(
    ObjectHttpAtomic,
  )<typia.PascalCase<ObjectHttpAtomic>>({
    convert: typia.notations.createValidatePascal<ObjectHttpAtomic>(),
    assert: typia.createAssert<typia.PascalCase<ObjectHttpAtomic>>(),
  });
