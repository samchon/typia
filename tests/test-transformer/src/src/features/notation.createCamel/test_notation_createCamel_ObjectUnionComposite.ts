import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_notation_createValidateCamel_ObjectUnionComposite = (): void =>
    _test_notation_validateGeneral("ObjectUnionComposite")<ObjectUnionComposite>(
        ObjectUnionComposite
  )<typia.CamelCase<ObjectUnionComposite>>({
    convert: typia.notations.createValidateCamel<ObjectUnionComposite>(),
    assert: typia.createAssert<typia.CamelCase<ObjectUnionComposite>>(),
  });
