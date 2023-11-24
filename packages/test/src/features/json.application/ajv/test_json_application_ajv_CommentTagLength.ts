import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { CommentTagLength } from "../../../structures/CommentTagLength";

export const test_json_application_ajv_CommentTagLength =
  _test_json_application("ajv")("CommentTagLength")(
    typia.json.application<[CommentTagLength], "ajv">(),
  );
