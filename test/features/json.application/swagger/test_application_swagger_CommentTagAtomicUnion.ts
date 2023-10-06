import typia from "typia"
import { CommentTagAtomicUnion } from "../../../structures/CommentTagAtomicUnion";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_CommentTagAtomicUnion = 
    _test_json_application("swagger")("CommentTagAtomicUnion")(
        typia.json.application<[CommentTagAtomicUnion], "swagger">(),
    );