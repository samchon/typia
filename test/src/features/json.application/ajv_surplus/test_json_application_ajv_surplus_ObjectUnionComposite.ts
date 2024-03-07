import typia from "typia";
import { ObjectUnionComposite } from "../../../structures/ObjectUnionComposite";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_surplus_ObjectUnionComposite =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "ObjectUnionComposite",
  })(typia.json.application<[ObjectUnionComposite], "ajv", true>());
