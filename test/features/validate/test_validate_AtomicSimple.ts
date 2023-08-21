import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_validate_AtomicSimple = _test_validate(
    "AtomicSimple",
)<AtomicSimple>(AtomicSimple)((input) => typia.validate<AtomicSimple>(input));
