import typia from "typia"
import { TagAtomicUnion } from "../../../structures/TagAtomicUnion";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_TagAtomicUnion = 
    _test_application("swagger")(
        "TagAtomicUnion",
        typia.application<[TagAtomicUnion], "swagger">(),
    );