import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_functional_validateParameters_ObjectLiteralType = (): void =>
  _test_functional_validateParameters("ObjectLiteralType")(ObjectLiteralType)(
    (p: (input: ObjectLiteralType) => ObjectLiteralType) =>
      typia.functional.validateParameters(p),
  );
