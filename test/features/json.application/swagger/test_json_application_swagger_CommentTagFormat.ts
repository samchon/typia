import typia from "../../../../src";
import { _test_json_application } from "../../../internal/_test_json_application";
import { CommentTagFormat } from "../../../structures/CommentTagFormat";

export const test_json_application_swagger_CommentTagFormat =
  _test_json_application("swagger")("CommentTagFormat")(
    typia.json.application<[CommentTagFormat], "swagger">(),
  );
