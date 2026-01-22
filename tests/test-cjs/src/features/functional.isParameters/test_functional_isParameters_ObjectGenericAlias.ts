import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_functional_isParameters_ObjectGenericAlias = (): void =>
  _test_functional_isParameters("ObjectGenericAlias")(ObjectGenericAlias)(
    (p: (input: ObjectGenericAlias) => ObjectGenericAlias) =>
      typia.functional.isParameters(p),
  );
