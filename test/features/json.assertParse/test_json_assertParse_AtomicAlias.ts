import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_json_assertParse_AtomicAlias = _test_json_assertParse(
    "AtomicAlias",
)<AtomicAlias>(AtomicAlias)((input) =>
    typia.json.assertParse<AtomicAlias>(input),
);
