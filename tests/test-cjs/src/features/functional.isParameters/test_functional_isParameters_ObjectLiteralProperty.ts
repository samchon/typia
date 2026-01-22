import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_functional_isParameters_ObjectLiteralProperty = (): void =>
  _test_functional_isParameters("ObjectLiteralProperty")(ObjectLiteralProperty)(
    (p: (input: ObjectLiteralProperty) => ObjectLiteralProperty) =>
      typia.functional.isParameters(p),
  );
