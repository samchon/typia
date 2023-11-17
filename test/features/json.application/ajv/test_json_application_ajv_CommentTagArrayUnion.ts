import typia from "../../../../src";
import { _test_json_application } from "../../../internal/_test_json_application";
import { CommentTagArrayUnion } from "../../../structures/CommentTagArrayUnion";

export const test_json_application_ajv_CommentTagArrayUnion =
  _test_json_application("ajv")("CommentTagArrayUnion")(
    typia.json.application<[CommentTagArrayUnion], "ajv">(),
  );
