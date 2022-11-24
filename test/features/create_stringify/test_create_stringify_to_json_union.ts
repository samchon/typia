import TSON from "../../../src";
import { ToJsonUnion } from "../../structures/ToJsonUnion";
import { _test_stringify } from "../internal/_test_stringify";

export const test_create_stringify_to_json_with_union = _test_stringify(
    "toJSON() with other union",
    ToJsonUnion.generate,
    TSON.createStringify<ToJsonUnion>(),
);
