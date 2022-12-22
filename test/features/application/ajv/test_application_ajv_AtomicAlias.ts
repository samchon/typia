import typia from "../../../../src";
import { AtomicAlias } from "../../../structures/AtomicAlias";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_AtomicAlias = _test_application("ajv")(
    "AtomicAlias",
    typia.application<[AtomicAlias], "ajv">(),
);
