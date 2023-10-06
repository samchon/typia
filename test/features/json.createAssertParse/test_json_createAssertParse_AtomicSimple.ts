import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_json_createAssertParse_AtomicSimple = _test_json_assertParse(
    "AtomicSimple",
)<AtomicSimple>(AtomicSimple)(typia.json.createAssertParse<AtomicSimple>());
