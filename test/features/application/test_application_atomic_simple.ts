import TSON from "../../../src";
import { AtomicSimple } from "../../structures/AtomicSimple";
import { _test_application } from "./_test_application";

export const test_application_atomic = _test_application(
    "atomic",
    TSON.application<[AtomicSimple]>(),
    {
        schemas: [
            {
                oneOf: [
                    {
                        $ref: "#/components/schemas/AtomicSimple_lt_boolean_comma_number_comma_string_gt_",
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
                AtomicSimple_lt_boolean_comma_number_comma_string_gt_: {
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
