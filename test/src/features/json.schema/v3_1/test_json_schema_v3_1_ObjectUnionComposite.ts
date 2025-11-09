import typia from "typia";
import { ObjectUnionComposite } from "../../../structures/ObjectUnionComposite";
import { _test_json_schema } from "../../../internal/_test_json_schema";

export const test_json_schema_v3_1_ObjectUnionComposite = (): void =>
  _test_json_schema({
    version: "3.1",
    name: "ObjectUnionComposite", 
  })(typia.json.schema<ObjectUnionComposite, "3.1">());