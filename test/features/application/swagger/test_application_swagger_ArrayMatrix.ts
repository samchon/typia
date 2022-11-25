import TSON from "../../../../src";
import { ArrayMatrix } from "../../../structures/ArrayMatrix";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_ArrayMatrix = _test_application(
    "swagger",
)("ArrayMatrix", TSON.application<[ArrayMatrix], "swagger">(), {
    schemas: [
        {
            type: "array",
            items: {
                type: "array",
                items: {
                    type: "array",
                    items: {
                        type: "number",
                        nullable: false,
                    },
                    nullable: false,
                },
                nullable: false,
            },
            nullable: false,
        },
    ],
    components: {
        schemas: {},
    },
    purpose: "swagger",
    prefix: "#/components/schemas",
});
