import typia from "../../../../src";
import { FunctionalTupleUnion } from "../../../structures/FunctionalTupleUnion";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_FunctionalTupleUnion = 
    _test_application("swagger")(
        "FunctionalTupleUnion",
        typia.application<[FunctionalTupleUnion], "swagger">(),
    );