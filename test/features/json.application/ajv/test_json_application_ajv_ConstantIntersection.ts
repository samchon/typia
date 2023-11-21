import typia from "../../../../src";
import { _test_json_application } from "../../../internal/_test_json_application";
import { ConstantIntersection } from "../../../structures/ConstantIntersection";

export const test_json_application_ajv_ConstantIntersection =
  _test_json_application("ajv")("ConstantIntersection")(
    typia.json.application<[ConstantIntersection], "ajv">(),
  );
