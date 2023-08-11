import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_json_stringify_ObjectJsonTag =
    _test_json_stringify<ObjectJsonTag>(ObjectJsonTag)(
        typia.json.createStringify<ObjectJsonTag>(),
    );
