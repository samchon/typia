import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_json_createValidateStringify_ObjectOptional =
  _test_json_validateStringify("ObjectOptional")<ObjectOptional>(
    ObjectOptional,
  )(typia.json.createValidateStringify<ObjectOptional>());
