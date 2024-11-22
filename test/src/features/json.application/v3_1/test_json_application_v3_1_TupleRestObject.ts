import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TupleRestObject } from "../../../structures/TupleRestObject";

export const test_json_application_v3_1_TupleRestObject =
  _test_json_application({
    version: "3.1",
    name: "TupleRestObject",
  })(typia.json.application<TupleRestObjectApplication, "3.1">());

interface TupleRestObjectApplication {
  insert(first: TupleRestObject): Promise<void>;
  reduce(
    first: TupleRestObject,
    second: TupleRestObject | null,
  ): Promise<TupleRestObject>;
  coalesce(
    first: TupleRestObject | null,
    second: TupleRestObject | null,
    third?: TupleRestObject | null,
  ): Promise<TupleRestObject | null>;
}
