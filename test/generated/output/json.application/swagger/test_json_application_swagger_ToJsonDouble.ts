import typia from "../../../../../src";
import { _test_json_application } from "../../../../internal/_test_json_application";
import { ToJsonDouble } from "../../../../structures/ToJsonDouble";

export const test_json_application_swagger_ToJsonDouble =
    _test_json_application("swagger")("ToJsonDouble")({
        schemas: [
            {
                $ref: "#/components/schemas/ToJsonDouble.Child",
            },
        ],
        components: {
            schemas: {
                "ToJsonDouble.Child": {
                    type: "object",
                    properties: {
                        id: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                        flag: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "boolean",
                        },
                    },
                    nullable: false,
                    required: ["id", "flag"],
                    "x-typia-jsDocTags": [],
                },
            },
        },
        purpose: "swagger",
    });
