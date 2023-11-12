import typia from "../../../../../src";
import { _test_json_application } from "../../../../internal/_test_json_application";
import { ToJsonUnion } from "../../../../structures/ToJsonUnion";

export const test_json_application_swagger_ToJsonUnion = _test_json_application(
    "swagger",
)("ToJsonUnion")({
    schemas: [
        {
            $ref: "#/components/schemas/ToJsonUnion",
        },
    ],
    components: {
        schemas: {
            ToJsonUnion: {
                type: "array",
                items: {
                    oneOf: [
                        {
                            type: "boolean",
                        },
                        {
                            $ref: "#/components/schemas/ToJsonUnion.ICitizen",
                        },
                        {
                            $ref: "#/components/schemas/ToJsonUnion.IProduct",
                        },
                        {
                            type: "string",
                        },
                        {
                            type: "number",
                        },
                        {
                            $ref: "#/components/schemas/ToJsonUnion.ICitizen",
                        },
                    ],
                },
            },
            "ToJsonUnion.ICitizen": {
                type: "object",
                properties: {
                    id: {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "number",
                    },
                    mobile: {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "string",
                    },
                    name: {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "string",
                    },
                },
                nullable: false,
                required: ["id", "mobile", "name"],
                "x-typia-jsDocTags": [],
            },
            "ToJsonUnion.IProduct": {
                type: "object",
                properties: {
                    manufacturer: {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "string",
                    },
                    brand: {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "string",
                    },
                    name: {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "string",
                    },
                },
                nullable: false,
                required: ["manufacturer", "brand", "name"],
                "x-typia-jsDocTags": [],
            },
        },
    },
    purpose: "swagger",
});
