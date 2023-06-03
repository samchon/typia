import fs from "fs";
import typia from "typia";

import { MapUnion } from "../structures/MapUnion";

const factory = typia.createAssert<MapUnion>();
fs.writeFileSync(
    __dirname + "/nestia-346-map.out.js",
    factory.toString(),
    "utf8",
);

try {
    factory(MapUnion.generate());
} catch (exp) {
    if (exp instanceof typia.TypeGuardError)
        console.log({
            path: exp.path,
            expected: exp.expected,
            value: exp.value,
        });
}
