import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_json_assertStringify_TupleRestAtomic =
    _test_json_assertStringify<TupleRestAtomic>(TupleRestAtomic)((input) =>
        typia.json.assertStringify<TupleRestAtomic>(input),
    );
