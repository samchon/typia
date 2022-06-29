import TSON from "../../../src";
import { Namespace } from "../../structures/Namespace";
import { _test_application } from "./_test_application";

export const test_application_namespace = _test_application(
    "namespace",
    TSON.application<[typeof Namespace]>(),
    {
        schemas: [
            {
                $ref: "#/components/schemas/Namespace",
            },
        ],
        components: {
            schemas: {
                Namespace: {
                    $id: "Namespace",
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
