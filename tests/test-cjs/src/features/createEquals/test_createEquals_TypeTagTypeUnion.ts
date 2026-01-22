import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

export const test_createEquals_TypeTagTypeUnion = (): void =>
  _test_equals("TypeTagTypeUnion")<TypeTagTypeUnion>(TypeTagTypeUnion)(
    typia.createEquals<TypeTagTypeUnion>(),
  );
