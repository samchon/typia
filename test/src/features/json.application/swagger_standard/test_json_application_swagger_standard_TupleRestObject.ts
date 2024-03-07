import typia from "typia";
import { TupleRestObject } from "../../../structures/TupleRestObject";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_standard_TupleRestObject =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "TupleRestObject",
  })(typia.json.application<[TupleRestObject], "swagger", false>());
