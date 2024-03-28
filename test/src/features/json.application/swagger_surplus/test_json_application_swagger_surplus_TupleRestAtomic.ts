import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TupleRestAtomic } from "../../../structures/TupleRestAtomic";

export const test_json_application_swagger_surplus_TupleRestAtomic =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "TupleRestAtomic",
  })(typia.json.application<[TupleRestAtomic], "swagger", true>());
