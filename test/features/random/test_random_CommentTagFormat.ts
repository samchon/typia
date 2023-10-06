import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_random_CommentTagFormat = _test_random(
    "CommentTagFormat",
)<CommentTagFormat>(CommentTagFormat)({
    random: () => typia.random<CommentTagFormat>(),
    assert: typia.createAssert<CommentTagFormat>(),
});
