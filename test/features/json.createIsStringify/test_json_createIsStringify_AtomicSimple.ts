import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_json_isStringify_AtomicSimple = _test_json_isStringify(
    "AtomicSimple",
    AtomicSimple.generate,
    typia.json.createIsStringify<AtomicSimple>(),
    AtomicSimple.SPOILERS,
);
