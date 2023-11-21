import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_json_isParse_ClassGetter = _test_json_isParse(
  "ClassGetter",
)<ClassGetter>(ClassGetter)((input) => typia.json.isParse<ClassGetter>(input));
