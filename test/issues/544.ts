import typia from "typia";

interface ISomething {
    /**
     * @type uint
     * @minimum 1
     */
    numeric: number;
}

const app = typia.json.application<[ISomething], "ajv">();
const json = JSON.stringify(app, null, 2);
console.log(json);
console.log(typia.createIs<ISomething>().toString());
