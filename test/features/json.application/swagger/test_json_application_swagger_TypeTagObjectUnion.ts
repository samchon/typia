import typia from "../../../../src";
import { _test_json_application } from "../../../internal/_test_json_application";
import { TypeTagObjectUnion } from "../../../structures/TypeTagObjectUnion";

export const test_json_application_swagger_TypeTagObjectUnion =
  _test_json_application("swagger")("TypeTagObjectUnion")(
    typia.json.application<[TypeTagObjectUnion], "swagger">(),
  );
