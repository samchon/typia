import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_functional_equalsFunction_TypeTagDefault = (): void =>
  _test_functional_equalsFunction("TypeTagDefault")(TypeTagDefault)(
    (p: (input: TypeTagDefault) => TypeTagDefault) =>
      typia.functional.equalsFunction(p),
  );
