import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_json_createIsParse_ObjectLiteralType = (): void =>
  _test_json_isParse("ObjectLiteralType")<ObjectLiteralType>(ObjectLiteralType)(
    typia.json.createIsParse<ObjectLiteralType>(),
  );
