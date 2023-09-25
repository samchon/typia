import typia from "../../../src";
import { _test_http_validateQuery } from "../../internal/_test_http_validateQuery";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_http_validateQuery_ObjectHttpArray = _test_http_validateQuery(
    "ObjectHttpArray",
)<ObjectHttpArray>(ObjectHttpArray)((input) =>
    typia.http.validateQuery<ObjectHttpArray>(input),
);
