import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_json_createAssertStringify_AtomicSimple =
  _test_json_assertStringify("AtomicSimple")<AtomicSimple>(AtomicSimple)(
    typia.json.createAssertStringify<AtomicSimple>(),
  );
