import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_json_createValidateStringify_CommentTagObjectUnion =
    _test_json_validateStringify(
        "CommentTagObjectUnion",
    )<CommentTagObjectUnion>(CommentTagObjectUnion)(
        typia.json.createValidateStringify<CommentTagObjectUnion>(),
    );
