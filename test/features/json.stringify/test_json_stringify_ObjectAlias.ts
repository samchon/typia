import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_json_stringify_ObjectAlias =
    _test_json_stringify<ObjectAlias>(ObjectAlias)((input) =>
        typia.json.stringify<ObjectAlias>(input),
    );
