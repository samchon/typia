import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { CommentTagAtomicUnion } from "../../../structures/CommentTagAtomicUnion";

export const test_json_application_swagger_CommentTagAtomicUnion =
  _test_json_application("swagger")("CommentTagAtomicUnion")(
    typia.json.application<[CommentTagAtomicUnion], "swagger">(),
  );
