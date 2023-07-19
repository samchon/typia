import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_json_assertParse_ObjectGeneric =
    _test_json_assertParse<ObjectGeneric>(ObjectGeneric)((input) =>
        typia.json.assertParse<ObjectGeneric>(input),
    );
