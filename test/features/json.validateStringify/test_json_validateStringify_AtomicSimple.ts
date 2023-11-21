import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_json_validateStringify_AtomicSimple =
  _test_json_validateStringify("AtomicSimple")<AtomicSimple>(AtomicSimple)(
    (input) => typia.json.validateStringify<AtomicSimple>(input),
  );
