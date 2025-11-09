import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_random_ObjectLiteralType = (): void =>
  _test_random("ObjectLiteralType")<ObjectLiteralType>(ObjectLiteralType)({
    random: () =>
      typia.random<ObjectLiteralType>((ObjectLiteralType as any).RANDOM),
    assert: typia.createAssert<ObjectLiteralType>(),
  });
