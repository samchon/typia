import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

export const test_json_createStringify_ArrayRepeatedUnion =
    _test_json_stringify("ArrayRepeatedUnion")<ArrayRepeatedUnion>(
        ArrayRepeatedUnion,
    )(typia.json.createStringify<ArrayRepeatedUnion>());
