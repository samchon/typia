import typia from "../../../../src";
import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectUnionCompositePointer } from "../../../structures/ObjectUnionCompositePointer";

export const test_json_application_swagger_ObjectUnionCompositePointer =
    _test_json_application("swagger")("ObjectUnionCompositePointer")(
        typia.json.application<[ObjectUnionCompositePointer], "swagger">(),
    );
