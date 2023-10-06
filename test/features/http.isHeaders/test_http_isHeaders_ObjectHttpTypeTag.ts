import typia from "../../../src";
import { _test_http_isHeaders } from "../../internal/_test_http_isHeaders";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_http_isHeaders_ObjectHttpTypeTag = _test_http_isHeaders(
    "ObjectHttpTypeTag",
)<ObjectHttpTypeTag>(ObjectHttpTypeTag)((input) =>
    typia.http.isHeaders<ObjectHttpTypeTag>(input),
);
