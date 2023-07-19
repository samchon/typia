import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_json_assertStringify_TupleRestArray =
    _test_json_assertStringify<TupleRestArray>(TupleRestArray)((input) =>
        typia.json.assertStringify(input),
    );
