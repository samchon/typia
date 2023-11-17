import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_json_createValidateParse_ObjectTuple =
  _test_json_validateParse("ObjectTuple")<ObjectTuple>(ObjectTuple)(
    typia.json.createValidateParse<ObjectTuple>(),
  );
