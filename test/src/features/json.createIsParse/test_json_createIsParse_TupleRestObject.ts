import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_json_createIsParse_TupleRestObject = (): void =>
  _test_json_isParse("TupleRestObject")<TupleRestObject>(TupleRestObject)(
    typia.json.createIsParse<TupleRestObject>(),
  );
