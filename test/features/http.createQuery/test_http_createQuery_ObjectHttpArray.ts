import typia from "../../../src";

import { _test_http_query } from "../../internal/_test_http_query";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_http_createQuery_ObjectHttpArray = _test_http_query(
    "ObjectHttpArray",
)<ObjectHttpArray>(
    ObjectHttpArray
)(typia.http.createQuery<ObjectHttpArray>());
