import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

export const test_createValidate_ObjectDynamic = (): void =>
  _test_validate("ObjectDynamic")<ObjectDynamic>(ObjectDynamic)(
    typia.createValidate<ObjectDynamic>(),
  );
