import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_json_createValidateParse_ObjectJsonTag =
  _test_json_validateParse("ObjectJsonTag")<ObjectJsonTag>(ObjectJsonTag)(
    typia.json.createValidateParse<ObjectJsonTag>(),
  );
