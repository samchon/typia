import typia from "../../../../src";
import { ObjectPrimitive } from "../../../structures/ObjectPrimitive";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_ObjectPrimitive = 
    _test_application("swagger")(
        "ObjectPrimitive",
        typia.application<[ObjectPrimitive], "swagger">(),
    );