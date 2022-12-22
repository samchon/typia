import typia from "../../../../src";
import { TagAtomicUnion } from "../../../structures/TagAtomicUnion";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_TagAtomicUnion = 
    _test_application("ajv")(
        "TagAtomicUnion",
        typia.application<[TagAtomicUnion], "ajv">(),
    );