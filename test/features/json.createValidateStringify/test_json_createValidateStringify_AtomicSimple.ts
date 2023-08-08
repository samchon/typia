import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_json_validateStringify_AtomicSimple =
    _test_json_validateStringify(
        "AtomicSimple",
        AtomicSimple.generate,
        typia.json.createValidateStringify<AtomicSimple>(),
        AtomicSimple.SPOILERS,
    );
