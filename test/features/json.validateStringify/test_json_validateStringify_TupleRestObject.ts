import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_json_validateStringify_TupleRestObject =
    _test_json_validateStringify(
        "TupleRestObject",
        TupleRestObject.generate,
        (input) => typia.json.validateStringify(input),
        TupleRestObject.SPOILERS,
    );
