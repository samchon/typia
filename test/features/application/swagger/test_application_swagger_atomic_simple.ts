import TSON from "../../../../src";
import { AtomicSimple } from "../../../structures/AtomicSimple";
import { _test_application_swagger } from "./_test_application_swagger";

export const test_application_swagger_atomic = _test_application_swagger(
    "atomic",
    TSON.application<[AtomicSimple], "swagger">(),
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
                            type: "string",
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
        purpose: "swagger",
        prefix: "#/components/schemas",
    },
);
