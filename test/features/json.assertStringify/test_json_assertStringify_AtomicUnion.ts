import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_json_assertStringify_AtomicUnion = _test_json_assertStringify(
    "AtomicUnion",
)<AtomicUnion>(AtomicUnion)((input) =>
    typia.json.assertStringify<AtomicUnion>(input),
);
