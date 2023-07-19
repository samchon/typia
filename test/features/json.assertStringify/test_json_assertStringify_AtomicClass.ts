import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_json_assertStringify_AtomicClass =
    _test_json_assertStringify<AtomicClass>(AtomicClass)((input) =>
        typia.json.assertStringify(input),
    );
