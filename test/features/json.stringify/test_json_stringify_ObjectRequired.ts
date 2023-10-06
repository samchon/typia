import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_json_stringify_ObjectRequired = _test_json_stringify(
    "ObjectRequired",
)<ObjectRequired>(ObjectRequired)((input) =>
    typia.json.stringify<ObjectRequired>(input),
);
