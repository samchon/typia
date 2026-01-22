import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_validate_ObjectLiteralType = (): void =>
  _test_validate("ObjectLiteralType")<ObjectLiteralType>(ObjectLiteralType)(
    (input) => typia.validate<ObjectLiteralType>(input),
  );
