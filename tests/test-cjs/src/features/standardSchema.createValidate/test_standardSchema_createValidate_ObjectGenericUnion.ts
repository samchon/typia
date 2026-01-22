import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_standardSchema_createValidate_ObjectGenericUnion = (): void =>
  _test_standardSchema_validate("ObjectGenericUnion")<ObjectGenericUnion>(
    ObjectGenericUnion,
  )(typia.createValidate<ObjectGenericUnion>());
