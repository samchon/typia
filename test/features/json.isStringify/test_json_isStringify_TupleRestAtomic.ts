import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_json_isStringify_TupleRestAtomic =
    _test_json_isStringify<TupleRestAtomic>(TupleRestAtomic)((input) =>
        typia.json.isStringify<TupleRestAtomic>(input),
    );
