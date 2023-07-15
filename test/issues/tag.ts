import fs from "fs";
import typia from "typia";

/**
 * @minimum 3
 * @maximum 7
 * @format uuid
 */
type MyAlias = number | string;

interface MyObject {
    /**
     * @minimum 3
     * @maximum 7
     * @format uuid
     */
    value: string | number;
}

const app = typia.json.application<[MyAlias, MyObject]>();
fs.writeFileSync(__dirname + "/tag.json", JSON.stringify(app, null, 4), "utf8");
