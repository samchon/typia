import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_json_stringify_TupleRestAtomic =
    _test_json_stringify<TupleRestAtomic>(TupleRestAtomic)((input) =>
        typia.json.stringify(input),
    );
