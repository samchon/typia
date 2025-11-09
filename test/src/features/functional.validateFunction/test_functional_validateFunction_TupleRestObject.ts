import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_functional_validateFunction_TupleRestObject = (): void =>
  _test_functional_validateFunction("TupleRestObject")(TupleRestObject)(
    (p: (input: TupleRestObject) => TupleRestObject) =>
      typia.functional.validateFunction(p),
  );
