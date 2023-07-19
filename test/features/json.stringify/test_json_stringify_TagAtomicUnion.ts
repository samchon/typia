import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";

export const test_json_stringify_TagAtomicUnion =
    _test_json_stringify<TagAtomicUnion>(TagAtomicUnion)((input) =>
        typia.json.stringify(input),
    );
