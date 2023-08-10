import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_json_assertParse_ObjectGenericAlias =
    _test_json_assertParse<ObjectGenericAlias>(ObjectGenericAlias)((input) =>
        typia.json.assertParse<ObjectGenericAlias>(input),
    );
