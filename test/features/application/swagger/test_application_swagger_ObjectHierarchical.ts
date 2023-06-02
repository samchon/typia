import typia from "typia"
import { ObjectHierarchical } from "../../../structures/ObjectHierarchical";
import { _test_application } from "../../../internal/_test_application";

export const test_application_swagger_ObjectHierarchical = 
    _test_application("swagger")(
        "ObjectHierarchical",
        typia.application<[ObjectHierarchical], "swagger">(),
    );