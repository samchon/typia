import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_json_assertParse_TupleRestAtomic =
    _test_json_assertParse<TupleRestAtomic>(TupleRestAtomic)((input) =>
        typia.json.assertParse<TupleRestAtomic>(input),
    );
