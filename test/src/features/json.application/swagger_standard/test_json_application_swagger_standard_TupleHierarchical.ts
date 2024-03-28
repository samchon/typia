import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TupleHierarchical } from "../../../structures/TupleHierarchical";

export const test_json_application_swagger_standard_TupleHierarchical =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "TupleHierarchical",
  })(typia.json.application<[TupleHierarchical], "swagger", false>());
