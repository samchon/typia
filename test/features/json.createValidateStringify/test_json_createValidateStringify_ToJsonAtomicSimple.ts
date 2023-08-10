import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

export const test_json_validateStringify_ToJsonAtomicSimple =
    _test_json_validateStringify<ToJsonAtomicSimple>(ToJsonAtomicSimple)(
        typia.json.createValidateStringify<ToJsonAtomicSimple>(),
    );
