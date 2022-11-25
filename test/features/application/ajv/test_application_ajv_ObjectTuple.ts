import TSON from "../../../../src";
import { ObjectTuple } from "../../../structures/ObjectTuple";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_ObjectTuple = _test_application("ajv")(
    "ObjectTuple",
    TSON.application<[ObjectTuple], "ajv">(),
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
                            "x-tson-required": true,
                        },
                        code: {
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
                    required: ["id", "code", "name"],
                    "x-tson_jsDocTags": [],
                },
                "ObjectTuple.ICitizen": {
                    $id: "components#/schemas/ObjectTuple.ICitizen",
                    type: "object",
                    properties: {
                        id: {
                            type: "string",
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
            },
        },
        purpose: "ajv",
        prefix: "components#/schemas",
    },
);
