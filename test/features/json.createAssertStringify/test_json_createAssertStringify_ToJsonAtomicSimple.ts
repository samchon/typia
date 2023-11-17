import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

export const test_json_createAssertStringify_ToJsonAtomicSimple =
  _test_json_assertStringify("ToJsonAtomicSimple")<ToJsonAtomicSimple>(
    ToJsonAtomicSimple,
  )(typia.json.createAssertStringify<ToJsonAtomicSimple>());
