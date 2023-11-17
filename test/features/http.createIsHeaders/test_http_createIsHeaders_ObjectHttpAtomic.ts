import typia from "../../../src";
import { _test_http_isHeaders } from "../../internal/_test_http_isHeaders";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_http_createIsHeaders_ObjectHttpAtomic = _test_http_isHeaders(
  "ObjectHttpAtomic",
)<ObjectHttpAtomic>(ObjectHttpAtomic)(
  typia.http.createIsHeaders<ObjectHttpAtomic>(),
);
