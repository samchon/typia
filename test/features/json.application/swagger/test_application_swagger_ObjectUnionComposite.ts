import typia from "typia"
import { ObjectUnionComposite } from "../../../structures/ObjectUnionComposite";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_ObjectUnionComposite = 
    _test_json_application("swagger")("ObjectUnionComposite")(
        typia.json.application<[ObjectUnionComposite], "swagger">(),
    );