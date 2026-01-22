import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_functional_isParameters_ObjectUnionImplicit = (): void =>
  _test_functional_isParameters("ObjectUnionImplicit")(ObjectUnionImplicit)(
    (p: (input: ObjectUnionImplicit) => ObjectUnionImplicit) =>
      typia.functional.isParameters(p),
  );
