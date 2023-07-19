import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_json_validateStringify_TupleRestArray =
    _test_json_validateStringify<TupleRestArray>(TupleRestArray)((input) =>
        typia.json.validateStringify(input),
    );
