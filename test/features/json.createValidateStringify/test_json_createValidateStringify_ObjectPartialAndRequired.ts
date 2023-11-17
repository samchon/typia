import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_json_createValidateStringify_ObjectPartialAndRequired =
  _test_json_validateStringify(
    "ObjectPartialAndRequired",
  )<ObjectPartialAndRequired>(ObjectPartialAndRequired)(
    typia.json.createValidateStringify<ObjectPartialAndRequired>(),
  );
