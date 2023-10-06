import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_createValidate_ObjectHttpCommentTag = _test_validate(
    "ObjectHttpCommentTag",
)<ObjectHttpCommentTag>(ObjectHttpCommentTag)(
    typia.createValidate<ObjectHttpCommentTag>(),
);
