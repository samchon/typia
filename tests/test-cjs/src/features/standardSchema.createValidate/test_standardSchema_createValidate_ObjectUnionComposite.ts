import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_standardSchema_createValidate_ObjectUnionComposite =
  (): void =>
    _test_standardSchema_validate("ObjectUnionComposite")<ObjectUnionComposite>(
      ObjectUnionComposite,
    )(typia.createValidate<ObjectUnionComposite>());
