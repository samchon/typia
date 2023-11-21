import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_json_isParse_ObjectSimple = _test_json_isParse(
  "ObjectSimple",
)<ObjectSimple>(ObjectSimple)((input) =>
  typia.json.isParse<ObjectSimple>(input),
);
