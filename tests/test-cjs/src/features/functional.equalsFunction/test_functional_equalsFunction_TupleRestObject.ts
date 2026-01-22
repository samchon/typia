import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_functional_equalsFunction_TupleRestObject = (): void =>
  _test_functional_equalsFunction("TupleRestObject")(TupleRestObject)(
    (p: (input: TupleRestObject) => TupleRestObject) =>
      typia.functional.equalsFunction(p),
  );
