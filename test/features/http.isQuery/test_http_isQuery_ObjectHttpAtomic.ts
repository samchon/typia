import typia from "../../../src";
import { _test_http_isQuery } from "../../internal/_test_http_isQuery";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_http_isQuery_ObjectHttpAtomic = _test_http_isQuery(
  "ObjectHttpAtomic",
)<ObjectHttpAtomic>(ObjectHttpAtomic)((input) =>
  typia.http.isQuery<ObjectHttpAtomic>(input),
);
