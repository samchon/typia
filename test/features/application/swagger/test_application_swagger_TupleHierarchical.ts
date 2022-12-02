import TSON from "../../../../src";
import { TupleHierarchical } from "../../../structures/TupleHierarchical";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_TupleHierarchical = _test_application(
    "swagger",
)("TupleHierarchical", TSON.application<[TupleHierarchical], "swagger">(), {
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
});
