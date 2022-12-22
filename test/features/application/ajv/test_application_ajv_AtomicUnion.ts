import typia from "../../../../src";
import { AtomicUnion } from "../../../structures/AtomicUnion";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_AtomicUnion = _test_application("ajv")(
    "AtomicUnion",
    typia.application<[AtomicUnion], "ajv">(),
);
