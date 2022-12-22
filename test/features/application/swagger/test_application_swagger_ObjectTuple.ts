import typia from "../../../../src";
import { ObjectTuple } from "../../../structures/ObjectTuple";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_ObjectTuple = 
    _test_application("swagger")(
        "ObjectTuple",
        typia.application<[ObjectTuple], "swagger">(),
    );