import typia from "../../../src";
import { _test_http_query } from "../../internal/_test_http_query";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_http_createQuery_ObjectHttpAtomic = _test_http_query(
  "ObjectHttpAtomic",
)<ObjectHttpAtomic>(ObjectHttpAtomic)(
  typia.http.createQuery<ObjectHttpAtomic>(),
);
