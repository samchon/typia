import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_json_isParse_ObjectRequired = _test_json_isParse(
  "ObjectRequired",
)<ObjectRequired>(ObjectRequired)((input) =>
  typia.json.isParse<ObjectRequired>(input),
);
