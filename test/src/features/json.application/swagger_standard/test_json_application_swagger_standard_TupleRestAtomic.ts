import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TupleRestAtomic } from "../../../structures/TupleRestAtomic";

export const test_json_application_swagger_standard_TupleRestAtomic =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "TupleRestAtomic",
  })(typia.json.application<[TupleRestAtomic], "swagger", false>());
