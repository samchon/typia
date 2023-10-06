import typia from "typia"
import { AtomicAlias } from "../../../structures/AtomicAlias";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_AtomicAlias = 
    _test_json_application("ajv")("AtomicAlias")(
        typia.json.application<[AtomicAlias], "ajv">(),
    );