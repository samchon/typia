import fs from "fs";

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
        if (primitive_equal_to(expected, actual) === false)
            throw new Error(
                `Bug on typia.reflect.metadata<${name}>(): failed to understand the ${name} type.`,
            );
    };
