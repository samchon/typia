import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_json_assertParse_ObjectNullable =
    _test_json_assertParse<ObjectNullable>(ObjectNullable)(
        typia.json.createAssertParse<ObjectNullable>(),
    );
