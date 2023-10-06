import typia from "../../../src";
import { _test_http_query } from "../../internal/_test_http_query";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_http_createQuery_ObjectHttpCommentTag = _test_http_query(
    "ObjectHttpCommentTag",
)<ObjectHttpCommentTag>(ObjectHttpCommentTag)(
    typia.http.createQuery<ObjectHttpCommentTag>(),
);
