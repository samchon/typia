import TSON from "../../../src";
import { ObjectUndefied } from "../../structures/ObjectUndefied";
import { _test_application } from "./_test_application";

export const test_application_object_undefined = _test_application(
    "undefined object",
    TSON.application<[ObjectUndefied]>(),
    {
        schemas: [
            {
                oneOf: [
                    {
                        $ref: "#/components/schemas/Array_lt_ObjectUndefied.ILecture_gt_",
                    },
                    {
                        type: "array",
                        items: {
                            $ref: "#/components/schemas/ObjectUndefied.ILecture",
                        },
                        nullable: false,
                    },
                ],
            },
        ],
        components: {
            schemas: {
                "Array_lt_ObjectUndefied.ILecture_gt_": {
                    type: "object",
                    properties: {
                        length: {
                            type: "number",
                            nullable: false,
                            description:
                                "Gets or sets the length of the array. This is a number one higher than the highest index in the array.",
                        },
                    },
                    nullable: false,
                    required: ["length"],
                },
                "ObjectUndefied.ILecture": {
                    type: "object",
                    properties: {
                        name: {
                            type: "string",
                            nullable: false,
                        },
                        professor: {
                            oneOf: [
                                {
                                    type: "string",
                                    nullable: false,
                                },
                                {
                                    type: "number",
                                    nullable: false,
                                },
                            ],
                        },
                        classroom: {
                            $ref: "#/components/schemas/ObjectUndefied.IClassroom",
                        },
                        grade: {
                            type: "number",
                            nullable: false,
                        },
                        nothing: {},
                    },
                    nullable: false,
                    required: ["name"],
                },
                "ObjectUndefied.IClassroom": {
                    type: "object",
                    properties: {
                        id: {
                            type: "string",
                            nullable: false,
                        },
                        name: {
                            type: "string",
                            nullable: false,
                        },
                    },
                    nullable: false,
                    required: ["id", "name"],
                },
            },
        },
        purpose: "swagger",
        prefix: "#/components/schemas",
    },
);
