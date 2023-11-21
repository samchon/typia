import typia from "../../../../src";
import { _test_json_application } from "../../../internal/_test_json_application";
import { CommentTagLength } from "../../../structures/CommentTagLength";

export const test_json_application_swagger_CommentTagLength =
  _test_json_application("swagger")("CommentTagLength")(
    typia.json.application<[CommentTagLength], "swagger">(),
  );
