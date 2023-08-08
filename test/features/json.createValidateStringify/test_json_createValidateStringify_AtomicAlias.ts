import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_json_validateStringify_AtomicAlias =
    _test_json_validateStringify(
        "AtomicAlias",
        AtomicAlias.generate,
        typia.json.createValidateStringify<AtomicAlias>(),
        AtomicAlias.SPOILERS,
    );
