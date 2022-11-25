import TSON from "../../../../src";
import { ToJsonAtomicSimple } from "../../../structures/ToJsonAtomicSimple";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_ToJsonAtomicSimple = _test_application("ajv")(
    "ToJsonAtomicSimple",
    TSON.application<[ToJsonAtomicSimple], "ajv">(),
    {
        schemas: [
            {
                type: "array",
                items: [
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
