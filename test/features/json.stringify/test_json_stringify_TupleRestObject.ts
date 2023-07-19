import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_json_stringify_TupleRestObject =
    _test_json_stringify<TupleRestObject>(TupleRestObject)((input) =>
        typia.json.stringify(input),
    );
