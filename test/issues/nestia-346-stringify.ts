import fs from "fs";
import typia from "typia";

type JsonObject = { [Key in string]?: JsonValue };
interface JsonArray extends Array<JsonValue> {}
type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

const factory = typia.createAssertStringify<JsonValue>();

fs.writeFileSync(
    __dirname + "/nestia-346-stringify.out.js",
    factory.toString(),
    "utf8",
);
