import typia from "../../../../src";
import { _test_json_application } from "../../../internal/_test_json_application";
import { DynamicUnion } from "../../../structures/DynamicUnion";

export const test_json_application_swagger_DynamicUnion =
  _test_json_application("swagger")("DynamicUnion")(
    typia.json.application<[DynamicUnion], "swagger">(),
  );
