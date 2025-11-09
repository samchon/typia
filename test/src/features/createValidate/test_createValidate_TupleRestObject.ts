import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_createValidate_TupleRestObject = (): void =>
  _test_validate("TupleRestObject")<TupleRestObject>(TupleRestObject)(
    typia.createValidate<TupleRestObject>(),
  );
