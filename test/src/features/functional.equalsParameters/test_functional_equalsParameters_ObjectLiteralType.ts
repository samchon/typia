import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_functional_equalsParameters_ObjectLiteralType =
  _test_functional_equalsParameters("ObjectLiteralType")(ObjectLiteralType)(
    (p: (input: ObjectLiteralType) => ObjectLiteralType) =>
      typia.functional.equalsParameters(p),
  );
