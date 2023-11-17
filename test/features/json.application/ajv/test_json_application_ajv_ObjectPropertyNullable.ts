import typia from "../../../../src";
import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectPropertyNullable } from "../../../structures/ObjectPropertyNullable";

export const test_json_application_ajv_ObjectPropertyNullable =
  _test_json_application("ajv")("ObjectPropertyNullable")(
    typia.json.application<[ObjectPropertyNullable], "ajv">(),
  );
