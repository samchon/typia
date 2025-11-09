import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

export const test_validateEquals_TypeTagTypeUnion = (): void =>
  _test_validateEquals("TypeTagTypeUnion")<TypeTagTypeUnion>(TypeTagTypeUnion)(
    (input) => typia.validateEquals<TypeTagTypeUnion>(input),
  );
