import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TupleRestObject } from "../../../structures/TupleRestObject";

export const test_json_application_swagger_surplus_TupleRestObject =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "TupleRestObject",
  })(typia.json.application<[TupleRestObject], "swagger", true>());
