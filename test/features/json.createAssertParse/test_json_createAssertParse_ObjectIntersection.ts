import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_json_assertParse_ObjectIntersection =
    _test_json_assertParse<ObjectIntersection>(ObjectIntersection)(
        typia.json.createAssertParse<ObjectIntersection>(),
    );
