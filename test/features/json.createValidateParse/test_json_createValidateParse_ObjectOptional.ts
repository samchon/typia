import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_json_createValidateParse_ObjectOptional =
  _test_json_validateParse("ObjectOptional")<ObjectOptional>(ObjectOptional)(
    typia.json.createValidateParse<ObjectOptional>(),
  );
