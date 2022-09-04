import TSON from "../../../src";
import { TagType } from "../../structures/TagType";
import { _test_application } from "./_test_application";

export const test_application_tag_type = _test_application(
    "type tag",
    TSON.application<[TagType]>(),
    {
        schemas: [
            {
                $ref: "#/components/schemas/TagType",
            },
        ],
        components: {
            schemas: {
                TagType: {
                    type: "object",
                    properties: {
                        int: {
                            type: "integer",
                            nullable: false,
                            description: "Integer value.",
                        },
                        uint: {
                            type: "integer",
                            nullable: false,
                            description: "Unsigned integer value.",
                            minimum: 0,
                        },
                    },
                    nullable: false,
                    required: ["int", "uint"],
                },
            },
        },
        purpose: "swagger",
        prefix: "#/components/schemas",
    },
);
