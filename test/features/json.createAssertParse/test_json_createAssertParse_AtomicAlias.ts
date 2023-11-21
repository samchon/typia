import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_json_createAssertParse_AtomicAlias = _test_json_assertParse(
  "AtomicAlias",
)<AtomicAlias>(AtomicAlias)(typia.json.createAssertParse<AtomicAlias>());
