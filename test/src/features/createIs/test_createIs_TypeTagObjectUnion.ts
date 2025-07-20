import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_createIs_TypeTagObjectUnion = (): void =>
  _test_is("TypeTagObjectUnion")<TypeTagObjectUnion>(TypeTagObjectUnion)(
    typia.createIs<TypeTagObjectUnion>(),
  );
