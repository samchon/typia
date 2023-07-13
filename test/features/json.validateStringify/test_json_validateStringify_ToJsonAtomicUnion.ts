import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

export const test_json_validateStringify_ToJsonAtomicUnion =
    _test_json_validateStringify(
        "ToJsonAtomicUnion",
        ToJsonAtomicUnion.generate,
        (input) => typia.json.validateStringify(input),
    );
