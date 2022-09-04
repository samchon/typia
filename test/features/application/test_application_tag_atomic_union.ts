import TSON from "../../../src";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";
import { _test_application } from "./_test_application";

export const test_application_tag_atomic_union = _test_application(
    "atomic union tag",
    TSON.application<[TagAtomicUnion]>(),
    {
        schemas: [
            {
                $ref: "#/components/schemas/TagAtomicUnion",
            },
        ],
        components: {
            schemas: {
                TagAtomicUnion: {
                    type: "object",
                    properties: {
                        value: {
                            oneOf: [
                                {
                                    type: "string",
                                    nullable: false,
                                    minLength: 3,
                                    maxLength: 7,
                                },
                                {
                                    type: "number",
                                    nullable: false,
                                    minimum: 3,
                                },
                            ],
                        },
                    },
                    nullable: false,
                    required: ["value"],
                },
            },
        },
        purpose: "swagger",
        prefix: "#/components/schemas",
    },
);
