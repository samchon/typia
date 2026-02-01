import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_notation_validateCamel_ObjectUnionComposite = (): void =>
    _test_notation_validateGeneral("ObjectUnionComposite")<ObjectUnionComposite>(
        ObjectUnionComposite
  )<typia.CamelCase<ObjectUnionComposite>>({
    convert: (input) => typia.notations.validateCamel<ObjectUnionComposite>(input),
    assert: typia.createAssert<typia.CamelCase<ObjectUnionComposite>>(),
  });
