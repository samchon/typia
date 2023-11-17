import typia from "../../../../src";
import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectPartialAndRequired } from "../../../structures/ObjectPartialAndRequired";

export const test_json_application_swagger_ObjectPartialAndRequired =
  _test_json_application("swagger")("ObjectPartialAndRequired")(
    typia.json.application<[ObjectPartialAndRequired], "swagger">(),
  );
