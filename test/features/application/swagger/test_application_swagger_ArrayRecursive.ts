import TSON from "../../../../src";
import { ArrayRecursive } from "../../../structures/ArrayRecursive";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_ArrayRecursive = _test_application(
    "swagger",
)("ArrayRecursive", TSON.application<[ArrayRecursive], "swagger">(), {
    schemas: [
        {
            $ref: "#/components/schemas/ArrayRecursive.ICategory",
        },
    ],
    components: {
        schemas: {
            "ArrayRecursive.ICategory": {
                type: "object",
                properties: {
                    children: {
                        type: "array",
                        items: {
                            $ref: "#/components/schemas/ArrayRecursive.ICategory",
                            "x-tson-required": true,
                        },
                        nullable: false,
                        "x-tson-required": true,
                    },
                    id: {
                        type: "number",
                        nullable: false,
                        "x-tson-required": true,
                    },
                    code: {
                        type: "string",
                        nullable: false,
                        "x-tson-required": true,
                    },
                    sequence: {
                        type: "number",
                        nullable: false,
                        "x-tson-required": true,
                    },
                    created_at: {
                        $ref: "#/components/schemas/ArrayRecursive.ITimestamp",
                        "x-tson-required": true,
                    },
                },
                nullable: false,
                required: ["children", "id", "code", "sequence", "created_at"],
                "x-tson_jsDocTags": [],
            },
            "ArrayRecursive.ITimestamp": {
                type: "object",
                properties: {
                    time: {
                        type: "number",
                        nullable: false,
                        "x-tson-required": true,
                    },
                    zone: {
                        type: "number",
                        nullable: false,
                        "x-tson-required": true,
                    },
                },
                nullable: false,
                required: ["time", "zone"],
                "x-tson_jsDocTags": [],
            },
        },
    },
    purpose: "swagger",
    prefix: "#/components/schemas",
});
