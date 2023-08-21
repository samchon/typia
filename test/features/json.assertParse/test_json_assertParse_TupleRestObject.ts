import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_json_assertParse_TupleRestObject = _test_json_assertParse(
    "TupleRestObject",
)<TupleRestObject>(TupleRestObject)((input) =>
    typia.json.assertParse<TupleRestObject>(input),
);
