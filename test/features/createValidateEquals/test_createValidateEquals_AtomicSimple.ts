import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_validateEquals_AtomicSimple =
    _test_validateEquals<AtomicSimple>(AtomicSimple)(
        typia.createValidateEquals<AtomicSimple>(),
    );
