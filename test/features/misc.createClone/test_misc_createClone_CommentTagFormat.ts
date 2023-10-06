import typia from "../../../src";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_misc_createClone_CommentTagFormat = _test_misc_clone(
    "CommentTagFormat",
)<CommentTagFormat>(
    CommentTagFormat
)(typia.misc.createClone<CommentTagFormat>());
