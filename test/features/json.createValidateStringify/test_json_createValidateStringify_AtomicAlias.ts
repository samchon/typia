import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_json_createValidateStringify_AtomicAlias =
    _test_json_validateStringify("AtomicAlias")<AtomicAlias>(AtomicAlias)(
        typia.json.createValidateStringify<AtomicAlias>(),
    );
