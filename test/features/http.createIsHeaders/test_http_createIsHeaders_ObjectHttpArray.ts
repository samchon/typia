import typia from "../../../src";
import { _test_http_isHeaders } from "../../internal/_test_http_isHeaders";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_http_createIsHeaders_ObjectHttpArray = _test_http_isHeaders(
    "ObjectHttpArray",
)<ObjectHttpArray>(ObjectHttpArray)(
    typia.http.createIsHeaders<ObjectHttpArray>(),
);
