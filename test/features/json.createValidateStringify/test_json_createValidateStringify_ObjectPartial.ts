import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_json_createValidateStringify_ObjectPartial =
  _test_json_validateStringify("ObjectPartial")<ObjectPartial>(ObjectPartial)(
    typia.json.createValidateStringify<ObjectPartial>(),
  );
