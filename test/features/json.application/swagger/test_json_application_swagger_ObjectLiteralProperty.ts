import typia from "../../../../src";
import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectLiteralProperty } from "../../../structures/ObjectLiteralProperty";

export const test_json_application_swagger_ObjectLiteralProperty =
  _test_json_application("swagger")("ObjectLiteralProperty")(
    typia.json.application<[ObjectLiteralProperty], "swagger">(),
  );
