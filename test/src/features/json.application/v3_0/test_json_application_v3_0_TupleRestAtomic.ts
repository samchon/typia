import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TupleRestAtomic } from "../../../structures/TupleRestAtomic";

export const test_json_application_v3_0_TupleRestAtomic =
  _test_json_application({
    version: "3.0",
    name: "TupleRestAtomic",
  })(typia.json.application<TupleRestAtomicApplication, "3.0">());

interface TupleRestAtomicApplication {
  insert(first: TupleRestAtomic): Promise<void>;
  reduce(
    first: TupleRestAtomic,
    second: TupleRestAtomic | null,
  ): Promise<TupleRestAtomic>;
  coalesce(
    first: TupleRestAtomic | null,
    second: TupleRestAtomic | null,
    third?: TupleRestAtomic | null,
  ): Promise<TupleRestAtomic | null>;
}
