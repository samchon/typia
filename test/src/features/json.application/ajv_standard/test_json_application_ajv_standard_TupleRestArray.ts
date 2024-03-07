import typia from "typia";
import { TupleRestArray } from "../../../structures/TupleRestArray";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_standard_TupleRestArray =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "TupleRestArray",
  })(typia.json.application<[TupleRestArray], "ajv", false>());
