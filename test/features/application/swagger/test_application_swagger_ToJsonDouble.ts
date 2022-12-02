import TSON from "../../../../src";
import { ToJsonDouble } from "../../../structures/ToJsonDouble";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_ToJsonDouble = _test_application(
    "swagger",
)("ToJsonDouble", TSON.application<[ToJsonDouble], "swagger">(), {
    schemas: [
        {
            $ref: "#/components/schemas/ToJsonDouble.Child",
        },
    ],
    components: {
        schemas: {
            "ToJsonDouble.Child": {
                type: "object",
                properties: {
                    id: {
                        type: "number",
                        nullable: false,
                        "x-tson-required": true,
                    },
                    flag: {
                        type: "boolean",
                        nullable: false,
                        "x-tson-required": true,
                    },
                },
                nullable: false,
                required: ["id", "flag"],
                "x-tson_jsDocTags": [],
            },
        },
    },
    purpose: "swagger",
    prefix: "#/components/schemas",
});
