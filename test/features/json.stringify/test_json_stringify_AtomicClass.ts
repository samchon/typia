import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_json_stringify_AtomicClass =
    _test_json_stringify<AtomicClass>(AtomicClass)((input) =>
        typia.json.stringify(input),
    );
