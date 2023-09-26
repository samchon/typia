import typia from "../../../src";
import { _test_http_headers } from "../../internal/_test_http_headers";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_http_createHeaders_ObjectHttpAtomic = _test_http_headers(
    "ObjectHttpAtomic",
)<ObjectHttpAtomic>(ObjectHttpAtomic)(
    typia.http.createHeaders<ObjectHttpAtomic>(),
);
