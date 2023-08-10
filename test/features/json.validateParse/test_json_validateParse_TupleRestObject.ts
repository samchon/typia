import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_json_validateParse_TupleRestObject =
    _test_json_validateParse<TupleRestObject>(TupleRestObject)((input) =>
        typia.json.validateParse<TupleRestObject>(input),
    );
