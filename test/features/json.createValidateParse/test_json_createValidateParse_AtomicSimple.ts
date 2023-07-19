import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_json_validateParse_AtomicSimple =
    _test_json_validateParse<AtomicSimple>(AtomicSimple)(
        typia.json.createValidateParse<AtomicSimple>(),
    );
