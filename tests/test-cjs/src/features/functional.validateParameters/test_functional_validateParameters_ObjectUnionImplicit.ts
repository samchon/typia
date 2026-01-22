import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_functional_validateParameters_ObjectUnionImplicit =
  (): void =>
    _test_functional_validateParameters("ObjectUnionImplicit")(
      ObjectUnionImplicit,
    )((p: (input: ObjectUnionImplicit) => ObjectUnionImplicit) =>
      typia.functional.validateParameters(p),
    );
