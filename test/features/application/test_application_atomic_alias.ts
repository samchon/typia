import TSON from "../../../src";
import { AtomicAlias } from "../../structures/AtomicAlias";
import { _test_application } from "./_test_application";

export const test_application_atomic_alias = _test_application(
    "generic alias",
    TSON.application<[AtomicAlias]>(),
    {
        schemas: [
            {
                oneOf: [
                    {
                        $ref: "#/components/schemas/AtomicAlias_lt_boolean_comma_number_comma_string_gt_",
                    },
                    {
                        type: "array",
                        items: {
                            oneOf: [
                                {
                                    type: "boolean",
                                    enum: [false, true],
                                    nullable: false,
                                },
                                {
                                    type: "number",
                                    nullable: false,
                                },
                                {
                                    type: "string",
                                    nullable: false,
                                },
                            ],
                        },
                        nullable: false,
                    },
                ],
            },
        ],
        components: {
            schemas: {
                AtomicAlias_lt_boolean_comma_number_comma_string_gt_: {
                    type: "object",
                    properties: {},
                    nullable: false,
                },
            },
        },
        purpose: "swagger",
        prefix: "#/components/schemas",
    },
);
