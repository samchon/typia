import TSON from "../../../../src";
import { ArrayRecursive } from "../../../structures/ArrayRecursive";
import { _test_application_ajv } from "./_test_application_ajv";

export const test_application_ajv_array_recursive = _test_application_ajv(
    "recursive array",
    TSON.application<[ArrayRecursive], "ajv">(),
    {
        schemas: [
            {
                $recursiveRef: "components#/schemas/ArrayRecursive.ICategory",
            },
        ],
        components: {
            schemas: {
                "ArrayRecursive.ICategory": {
                    $id: "components#/schemas/ArrayRecursive.ICategory",
                    $recursiveAnchor: true,
                    type: "object",
                    properties: {
                        children: {
                            type: "array",
                            items: {
                                $recursiveRef:
                                    "components#/schemas/ArrayRecursive.ICategory",
                            },
                            nullable: false,
                        },
                        id: {
                            type: "number",
                            nullable: false,
                        },
                        code: {
                            type: "string",
                            nullable: false,
                        },
                        sequence: {
                            type: "number",
                            nullable: false,
                        },
                        created_at: {
                            $ref: "components#/schemas/ArrayRecursive.ITimestamp",
                        },
                    },
                    nullable: false,
                    required: [
                        "children",
                        "id",
                        "code",
                        "sequence",
                        "created_at",
                    ],
                    "x-tson_jsDocTags": [],
                },
                "ArrayRecursive.ITimestamp": {
                    $id: "components#/schemas/ArrayRecursive.ITimestamp",
                    type: "object",
                    properties: {
                        time: {
                            type: "number",
                            nullable: false,
                        },
                        zone: {
                            type: "number",
                            nullable: false,
                        },
                    },
                    nullable: false,
                    required: ["time", "zone"],
                    "x-tson_jsDocTags": [],
                },
            },
        },
        purpose: "ajv",
        prefix: "components#/schemas",
    },
);
