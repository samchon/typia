import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_json_isParse_TupleRestObject = _test_json_isParse(
    "TupleRestObject",
    TupleRestObject.generate,
    typia.json.createIsParse<TupleRestObject>(),
    TupleRestObject.SPOILERS,
);
