import typia from "../../../src";
import { _test_http_headers } from "../../internal/_test_http_headers";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_http_createHeaders_ObjectHttpConstant = _test_http_headers(
    "ObjectHttpConstant",
)<ObjectHttpConstant>(ObjectHttpConstant)(
    typia.http.createHeaders<ObjectHttpConstant>(),
);
