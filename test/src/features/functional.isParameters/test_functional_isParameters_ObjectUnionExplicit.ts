import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_functional_isParameters_ObjectUnionExplicit = (): void =>
  _test_functional_isParameters("ObjectUnionExplicit")(ObjectUnionExplicit)(
    (p: (input: ObjectUnionExplicit) => ObjectUnionExplicit) =>
      typia.functional.isParameters(p),
  );
