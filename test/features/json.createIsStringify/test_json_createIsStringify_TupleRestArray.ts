import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_json_isStringify_TupleRestArray = _test_json_isStringify(
    "TupleRestArray",
    TupleRestArray.generate,
    typia.json.createIsStringify<TupleRestArray>(),
    TupleRestArray.SPOILERS,
);
