import TSON from "../../../src";
import { ObjectAlias } from "../../structures/ObjectAlias";
import { _test_application } from "./_test_application";

export const test_application_object_alias = _test_application(
    "aliased object",
    TSON.application<[ObjectAlias]>(),
    {
        schemas: [
            {
                oneOf: [
                    {
                        $ref: "#/components/schemas/Array_lt_ObjectAlias.IMember_gt_",
                    },
                    {
                        type: "array",
                        items: {
                            $ref: "#/components/schemas/ObjectAlias.IMember",
                        },
                        nullable: false,
                    },
                ],
            },
        ],
        components: {
            schemas: {
                "Array_lt_ObjectAlias.IMember_gt_": {
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
                "ObjectAlias.IMember": {
                    type: "object",
                    properties: {
                        id: {
                            type: "string",
                            nullable: true,
                        },
                        email: {
                            type: "string",
                            nullable: false,
                        },
                        name: {
                            type: "string",
                            nullable: false,
                        },
                        sex: {
                            oneOf: [
                                {
                                    type: "number",
                                    enum: [2, 1],
                                    nullable: true,
                                },
                                {
                                    type: "string",
                                    enum: ["male", "female"],
                                    nullable: true,
                                },
                            ],
                        },
                        age: {
                            type: "number",
                            nullable: true,
                        },
                        dead: {
                            type: "boolean",
                            enum: [false, true],
                            nullable: true,
                        },
                    },
                    nullable: false,
                    required: ["id", "email", "name", "sex", "age", "dead"],
                },
            },
        },
        purpose: "swagger",
        prefix: "#/components/schemas",
    },
);
