import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_json_createValidateParse_ObjectRequired =
  _test_json_validateParse("ObjectRequired")<ObjectRequired>(ObjectRequired)(
    typia.json.createValidateParse<ObjectRequired>(),
  );
