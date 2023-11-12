import fs from "fs";

import { IMetadata } from "typia/lib/schemas/metadata/IMetadata";
import { IMetadataApplication } from "typia/lib/schemas/metadata/IMetadataApplication";
import { MetadataApplication } from "typia/lib/schemas/metadata/MetadataApplication";

import { primitive_equal_to } from "../helpers/primitive_equal_to";

export const _test_reflect_metadata =
    (name: string) => (app: MetadataApplication) => {
        const expected: IMetadataApplication = app.toJSON();
        const actual: IMetadataApplication = JSON.parse(
            fs.readFileSync(
                `${__dirname}/../../../test/schemas/reflect/metadata/${name}.json`,
                "utf8",
            ),
        );
        sort(expected);
        sort(actual);

        if (primitive_equal_to(expected, actual) === false)
            throw new Error(
                `Bug on typia.reflect.metadata<${name}>(): failed to understand the ${name} type.`,
            );
    };

const sort = (app: IMetadataApplication): void => {
    const object = (elem: object) => {
        for (const value of Object.values(elem)) iterate(value);
    };
    const array = (elem: Array<any>) => {
        for (const v of elem) iterate(v);
        elem.sort((x, y) => {
            const alpha = JSON.stringify(x);
            const beta = JSON.stringify(y);
            return alpha < beta ? -1 : alpha === beta ? 0 : 1;
        });
    };
    const iterate = (elem: any) => {
        if (elem === null || elem === undefined) return;
        else if (Array.isArray(elem)) array(elem);
        else if (typeof elem === "object") object(elem);
    };
    iterate(app);
};
