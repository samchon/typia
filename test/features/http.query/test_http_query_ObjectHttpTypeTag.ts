import typia from "../../../src";
import { _test_http_query } from "../../internal/_test_http_query";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_http_query_ObjectHttpTypeTag = _test_http_query(
  "ObjectHttpTypeTag",
)<ObjectHttpTypeTag>(ObjectHttpTypeTag)((input) =>
  typia.http.query<ObjectHttpTypeTag>(input),
);
