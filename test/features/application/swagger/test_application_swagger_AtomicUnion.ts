import typia from "typia"
import { AtomicUnion } from "../../../structures/AtomicUnion";
import { _test_application } from "../../../internal/_test_application";

export const test_application_swagger_AtomicUnion = 
    _test_application("swagger")(
        "AtomicUnion",
        typia.application<[AtomicUnion], "swagger">(),
    );