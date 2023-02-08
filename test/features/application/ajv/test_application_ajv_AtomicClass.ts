import typia from "../../../../src";
import { AtomicClass } from "../../../structures/AtomicClass";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_AtomicClass = 
    _test_application("ajv")(
        "AtomicClass",
        typia.application<[AtomicClass], "ajv">(),
    );