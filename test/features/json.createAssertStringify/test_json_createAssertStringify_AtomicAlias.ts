import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_json_createAssertStringify_AtomicAlias =
  _test_json_assertStringify("AtomicAlias")<AtomicAlias>(AtomicAlias)(
    typia.json.createAssertStringify<AtomicAlias>(),
  );
