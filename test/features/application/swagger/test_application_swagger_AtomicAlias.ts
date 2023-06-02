import typia from "typia"
import { AtomicAlias } from "../../../structures/AtomicAlias";
import { _test_application } from "../../../internal/_test_application";

export const test_application_swagger_AtomicAlias = 
    _test_application("swagger")(
        "AtomicAlias",
        typia.application<[AtomicAlias], "swagger">(),
    );