import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_validate_ObjectHttpCommentTag = _test_validate(
    "ObjectHttpCommentTag",
)<ObjectHttpCommentTag>(ObjectHttpCommentTag)((input) =>
    typia.validate<ObjectHttpCommentTag>(input),
);
