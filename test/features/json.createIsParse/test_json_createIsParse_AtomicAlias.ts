import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_json_isParse_AtomicAlias = _test_json_isParse(
    "AtomicAlias",
    AtomicAlias.generate,
    typia.json.createIsParse<AtomicAlias>(),
    AtomicAlias.SPOILERS,
);
