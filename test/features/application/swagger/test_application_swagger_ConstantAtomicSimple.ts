import TSON from "../../../../src";
import { ConstantAtomicSimple } from "../../../structures/ConstantAtomicSimple";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_ConstantAtomicSimple = _test_application(
    "swagger",
)(
    "ConstantAtomicSimple",
    TSON.application<[ConstantAtomicSimple], "swagger">(),
    {
        schemas: [
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
                            enum: [2],
                            nullable: false,
                        },
                        {
                            type: "string",
                            enum: ["three"],
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
