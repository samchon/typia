import typia from "../../../../../src";
import { _test_json_application } from "../../../../internal/_test_json_application";
import { DynamicNever } from "../../../../structures/DynamicNever";

export const test_json_application_swagger_DynamicNever =
    _test_json_application("swagger")("DynamicNever")({
        schemas: [
            {
                $ref: "#/components/schemas/DynamicNever",
            },
        ],
        components: {
            schemas: {
                DynamicNever: {
                    type: "object",
                    properties: {},
                    nullable: false,
                    "x-typia-jsDocTags": [],
                },
            },
        },
        purpose: "swagger",
    });
