import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_json_stringify_ObjectPrimitive = _test_json_stringify(
    "ObjectPrimitive",
)<ObjectPrimitive>(ObjectPrimitive)((input) =>
    typia.json.stringify<ObjectPrimitive>(input),
);
