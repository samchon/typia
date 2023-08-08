import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_json_validateStringify_AtomicUnion =
    _test_json_validateStringify(
        "AtomicUnion",
        AtomicUnion.generate,
        (input) => typia.json.validateStringify(input),
        AtomicUnion.SPOILERS,
    );
