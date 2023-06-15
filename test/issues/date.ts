import fs from "fs";
import typia from "typia";

interface INativeDate {
    /**
     * @format date-time
     */
    value: Date;
}

console.log(typia.createIs<INativeDate>().toString());
fs.writeFileSync(
    __dirname + "/date.meta.json",
    JSON.stringify(typia.metadata<[INativeDate]>(), null, 4),
    "utf8",
);
fs.writeFileSync(
    __dirname + "/date.ajv.json",
    JSON.stringify(typia.application<[INativeDate]>(), null, 4),
    "utf8",
);
