import fs from "fs";
import typia from "typia";

interface Fixed {
    /**
     * @minLength 32
     * @maxLength 32
     */
    string: string;

    /**
     * @minimum 9
     * @maximum 9
     */
    number: number;

    /**
     * @minItems 5
     * @maxItems 5
     * @minimum 5
     * @maximum 5
     */
    array: number[];
}

const random = typia.createRandom<Fixed>();
fs.writeFileSync(__dirname + "/758.js", random.toString(), "utf8");
