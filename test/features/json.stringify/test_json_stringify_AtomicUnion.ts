import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_json_stringify_AtomicUnion =
    _test_json_stringify<AtomicUnion>(AtomicUnion)((input) =>
        typia.json.stringify<AtomicUnion>(input),
    );
