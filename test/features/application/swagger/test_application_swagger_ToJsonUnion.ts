import TSON from "../../../../src";
import { ToJsonUnion } from "../../../structures/ToJsonUnion";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_ToJsonUnion = _test_application(
    "swagger",
)("ToJsonUnion", TSON.application<[ToJsonUnion], "swagger">(), {
    schemas: [
        {
            type: "array",
            items: {
                oneOf: [
                    {},
                    {
                        type: "string",
                        nullable: false,
                    },
                    {
                        type: "number",
                        nullable: false,
                    },
                    {
                        type: "boolean",
                        nullable: false,
                    },
                    {
                        $ref: "#/components/schemas/ToJsonUnion.ICitizen",
                    },
                    {
                        $ref: "#/components/schemas/ToJsonUnion.IProduct",
                    },
                ],
            },
            nullable: false,
        },
    ],
    components: {
        schemas: {
            "ToJsonUnion.ICitizen": {
                type: "object",
                properties: {
                    id: {
                        type: "number",
                        nullable: false,
                        "x-tson-required": true,
                    },
                    mobile: {
                        type: "string",
                        nullable: false,
                        "x-tson-required": true,
                    },
                    name: {
                        type: "string",
                        nullable: false,
                        "x-tson-required": true,
                    },
                },
                nullable: false,
                required: ["id", "mobile", "name"],
                "x-tson_jsDocTags": [],
            },
            "ToJsonUnion.IProduct": {
                type: "object",
                properties: {
                    manufacturer: {
                        type: "string",
                        nullable: false,
                        "x-tson-required": true,
                    },
                    brand: {
                        type: "string",
                        nullable: false,
                        "x-tson-required": true,
                    },
                    name: {
                        type: "string",
                        nullable: false,
                        "x-tson-required": true,
                    },
                },
                nullable: false,
                required: ["manufacturer", "brand", "name"],
                "x-tson_jsDocTags": [],
            },
        },
    },
    purpose: "swagger",
    prefix: "#/components/schemas",
});
