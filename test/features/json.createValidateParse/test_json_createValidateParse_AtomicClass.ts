import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_json_validateParse_AtomicClass =
    _test_json_validateParse<AtomicClass>(AtomicClass)(
        typia.json.createValidateParse<AtomicClass>(),
    );
