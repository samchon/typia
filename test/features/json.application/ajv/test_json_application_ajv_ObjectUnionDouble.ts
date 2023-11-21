import typia from "../../../../src";
import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectUnionDouble } from "../../../structures/ObjectUnionDouble";

export const test_json_application_ajv_ObjectUnionDouble =
  _test_json_application("ajv")("ObjectUnionDouble")(
    typia.json.application<[ObjectUnionDouble], "ajv">(),
  );
