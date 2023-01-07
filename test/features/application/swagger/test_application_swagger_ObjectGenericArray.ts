import typia from "../../../../src";
import { ObjectGenericArray } from "../../../structures/ObjectGenericArray";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_ObjectGenericArray = 
    _test_application("swagger")(
        "ObjectGenericArray",
        typia.application<[ObjectGenericArray], "swagger">(),
    );