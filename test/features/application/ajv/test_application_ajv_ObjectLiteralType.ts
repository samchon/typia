import typia from "../../../../src";
import { ObjectLiteralType } from "../../../structures/ObjectLiteralType";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_ObjectLiteralType = _test_application("ajv")(
    "ObjectLiteralType",
    typia.application<[ObjectLiteralType], "ajv">(),
    {
        schemas: [
            {
                $ref: "components#/schemas/__object",
            },
        ],
        components: {
            schemas: {
                __object: {
                    $id: "components#/schemas/__object",
                    type: "object",
                    properties: {
                        id: {
                            type: "string",
                            nullable: false,
                            "x-typia-required": true,
                        },
                        name: {
                            type: "string",
                            nullable: false,
                            "x-typia-required": true,
                        },
                        age: {
                            type: "number",
                            nullable: false,
                            "x-typia-required": true,
                        },
                    },
                    nullable: false,
                    required: ["id", "name", "age"],
                    "x-typia_jsDocTags": [],
                },
            },
        },
        purpose: "ajv",
        prefix: "components#/schemas",
    },
);
