import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_json_createAssertParse_ObjectInternal =
  _test_json_assertParse("ObjectInternal")<ObjectInternal>(ObjectInternal)(
    typia.json.createAssertParse<ObjectInternal>(),
  );
