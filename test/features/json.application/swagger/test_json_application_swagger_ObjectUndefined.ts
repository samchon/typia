import typia from "../../../../src";
import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectUndefined } from "../../../structures/ObjectUndefined";

export const test_json_application_swagger_ObjectUndefined =
  _test_json_application("swagger")("ObjectUndefined")(
    typia.json.application<[ObjectUndefined], "swagger">(),
  );
