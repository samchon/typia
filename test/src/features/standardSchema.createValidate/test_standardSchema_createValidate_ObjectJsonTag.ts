import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_standardSchema_createValidate_ObjectJsonTag = (): void =>
  _test_standardSchema_validate("ObjectJsonTag")<ObjectJsonTag>(ObjectJsonTag)(
    typia.createValidate<ObjectJsonTag>(),
  );
