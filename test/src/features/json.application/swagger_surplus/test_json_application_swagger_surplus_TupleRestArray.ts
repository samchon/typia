import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TupleRestArray } from "../../../structures/TupleRestArray";

export const test_json_application_swagger_surplus_TupleRestArray =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "TupleRestArray",
  })(typia.json.application<[TupleRestArray], "swagger", true>());
