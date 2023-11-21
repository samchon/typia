import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_json_createStringify_ObjectGeneric = _test_json_stringify(
  "ObjectGeneric",
)<ObjectGeneric>(ObjectGeneric)(typia.json.createStringify<ObjectGeneric>());
