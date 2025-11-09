import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_functional_validateEqualsFunction_TupleRestObject =
  (): void =>
    _test_functional_validateEqualsFunction("TupleRestObject")(TupleRestObject)(
      (p: (input: TupleRestObject) => TupleRestObject) =>
        typia.functional.validateEqualsFunction(p),
    );
