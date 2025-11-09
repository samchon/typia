import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_misc_createValidateClone_ObjectGenericUnion = (): void =>
  _test_misc_validateClone("ObjectGenericUnion")<ObjectGenericUnion>(
    ObjectGenericUnion,
  )(typia.misc.createValidateClone<ObjectGenericUnion>());
