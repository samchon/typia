import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_json_isStringify_AtomicClass =
    _test_json_isStringify<AtomicClass>(AtomicClass)((input) =>
        typia.json.isStringify(input),
    );
