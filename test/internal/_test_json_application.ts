import fs from "fs";
import { IJsonApplication } from "typia";

import { primitive_equal_to } from "../helpers/primitive_equal_to";

export const _test_json_application =
    (purpose: "ajv" | "swagger") =>
    (name: string) =>
    (generated: IJsonApplication) => {
        const expected: IJsonApplication = JSON.parse(
            fs.readFileSync(
                `${__dirname}/../../../test/schemas/json/${purpose}/${name}.json`,
                "utf8",
            ),
        );
        sort(generated);
        sort(expected);

        if (primitive_equal_to(generated, expected) === false)
            throw new Error(
                `Bug on typia.json.application<${name}, "${purpose}">(): failed to understand the ${name} type.`,
            );
    };

function sort(app: IJsonApplication): void {
    function object(elem: object) {
        for (const value of Object.values(elem)) iterate(value);
    }
    function array(elem: Array<any>) {
        for (const v of elem) iterate(v);
        elem.sort((x, y) => {
            const alpha = JSON.stringify(x);
            const beta = JSON.stringify(y);
            return alpha < beta ? -1 : alpha === beta ? 0 : 1;
        });
    }
    function iterate(elem: any) {
        if (elem === null || elem === undefined) return;
        else if (Array.isArray(elem)) array(elem);
        else if (typeof elem === "object") object(elem);
    }
    iterate(app);
}
