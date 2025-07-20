import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_createValidate_ObjectUnionDouble = (): void =>
  _test_validate("ObjectUnionDouble")<ObjectUnionDouble>(ObjectUnionDouble)(
    typia.createValidate<ObjectUnionDouble>(),
  );
