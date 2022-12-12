import typia from "../../../../src";
import { ObjectTuple } from "../../../structures/ObjectTuple";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_ObjectTuple = _test_application("ajv")(
    "ObjectTuple",
    typia.application<[ObjectTuple], "ajv">(),
    {
        schemas: [
            {
                type: "array",
                items: [
                    {
                        $ref: "components#/schemas/ObjectTuple.ISection",
                    },
                    {
                        $ref: "components#/schemas/ObjectTuple.ICitizen",
                    },
                ],
                nullable: false,
            },
        ],
        components: {
            schemas: {
                "ObjectTuple.ISection": {
                    $id: "components#/schemas/ObjectTuple.ISection",
                    type: "object",
                    properties: {
                        id: {
                            type: "string",
                            nullable: false,
                            "x-typia-required": true,
                        },
                        code: {
                            type: "string",
                            nullable: false,
                            "x-typia-required": true,
                        },
                        name: {
                            type: "string",
                            nullable: false,
                            "x-typia-required": true,
                        },
                    },
                    nullable: false,
                    required: ["id", "code", "name"],
                    "x-typia_jsDocTags": [],
                },
                "ObjectTuple.ICitizen": {
                    $id: "components#/schemas/ObjectTuple.ICitizen",
                    type: "object",
                    properties: {
                        id: {
                            type: "string",
                            nullable: false,
                            "x-typia-required": true,
                        },
                        mobile: {
                            type: "string",
                            nullable: false,
                            "x-typia-required": true,
                        },
                        name: {
                            type: "string",
                            nullable: false,
                            "x-typia-required": true,
                        },
                    },
                    nullable: false,
                    required: ["id", "mobile", "name"],
                    "x-typia_jsDocTags": [],
                },
            },
        },
        purpose: "ajv",
        prefix: "components#/schemas",
    },
);
