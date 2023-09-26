import typia from "../../../src";
import { _test_http_headers } from "../../internal/_test_http_headers";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_http_headers_ObjectHttpCommentTag = _test_http_headers(
    "ObjectHttpCommentTag",
)<ObjectHttpCommentTag>(ObjectHttpCommentTag)((input) =>
    typia.http.headers<ObjectHttpCommentTag>(input),
);
