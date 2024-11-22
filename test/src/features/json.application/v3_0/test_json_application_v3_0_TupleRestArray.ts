import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TupleRestArray } from "../../../structures/TupleRestArray";

export const test_json_application_v3_0_TupleRestArray = _test_json_application(
  {
    version: "3.0",
    name: "TupleRestArray",
  },
)(typia.json.application<TupleRestArrayApplication, "3.0">());

interface TupleRestArrayApplication {
  insert(first: TupleRestArray): Promise<void>;
  reduce(
    first: TupleRestArray,
    second: TupleRestArray | null,
  ): Promise<TupleRestArray>;
  coalesce(
    first: TupleRestArray | null,
    second: TupleRestArray | null,
    third?: TupleRestArray | null,
  ): Promise<TupleRestArray | null>;
}
