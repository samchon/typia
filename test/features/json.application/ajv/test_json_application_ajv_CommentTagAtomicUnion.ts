import typia from "../../../../src";
import { _test_json_application } from "../../../internal/_test_json_application";
import { CommentTagAtomicUnion } from "../../../structures/CommentTagAtomicUnion";

export const test_json_application_ajv_CommentTagAtomicUnion =
    _test_json_application("ajv")("CommentTagAtomicUnion")(
        typia.json.application<[CommentTagAtomicUnion], "ajv">(),
    );
