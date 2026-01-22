import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_json_isParse_TupleRestObject = (): void =>
  _test_json_isParse("TupleRestObject")<TupleRestObject>(TupleRestObject)(
    (input) => typia.json.isParse<TupleRestObject>(input),
  );
