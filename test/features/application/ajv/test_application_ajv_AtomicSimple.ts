import typia from "typia";

import { AtomicSimple } from "../../../structures/AtomicSimple";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_AtomicSimple = _test_application("ajv")(
    "AtomicSimple",
    typia.application<[AtomicSimple], "ajv">(),
);
