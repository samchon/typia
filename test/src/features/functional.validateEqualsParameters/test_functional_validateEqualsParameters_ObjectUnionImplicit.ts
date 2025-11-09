import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_functional_validateEqualsParameters_ObjectUnionImplicit =
  (): void =>
    _test_functional_validateEqualsParameters("ObjectUnionImplicit")(
      ObjectUnionImplicit,
    )((p: (input: ObjectUnionImplicit) => ObjectUnionImplicit) =>
      typia.functional.validateEqualsParameters(p),
    );
