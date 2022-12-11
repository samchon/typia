import TSON from "../../../../src";
import { TupleRestAtomic } from "../../../structures/TupleRestAtomic";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_TupleRestAtomic = _test_application("ajv")(
    "TupleRestAtomic",
    TSON.application<[TupleRestAtomic], "ajv">(),
    {
        schemas: [
            {
                type: "array",
                items: {
                    oneOf: [
                        {
                            type: "boolean",
                            nullable: false,
                        },
                        {
                            type: "number",
                            nullable: false,
                        },
                        {
                            type: "array",
                            items: {
                                type: "string",
                                nullable: false,
                            },
                            nullable: false,
                        },
                    ],
                },
                nullable: false,
            },
        ],
        components: {
            schemas: {},
        },
        purpose: "ajv",
        prefix: "components#/schemas",
    },
);
