import typia from "../../../../src";
import { _test_json_application } from "../../../internal/_test_json_application";
import { TupleRestObject } from "../../../structures/TupleRestObject";

export const test_json_application_ajv_TupleRestObject = _test_json_application(
  "ajv",
)("TupleRestObject")(typia.json.application<[TupleRestObject], "ajv">());
