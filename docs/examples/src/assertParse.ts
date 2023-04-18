import typia from "typia";

const json: string = JSON.stringify(typia.random<IMember>());
const parsed: IMember = typia.assertParse<IMember>(json);

console.log(json === JSON.stringify(parsed)); // true

interface IMember {
    /**
     * @format uuid
     */
    id: string;

    /**
     * @format email
     */
    email: string;

    /**
     * @type int
     * @exclusiveMinimum 19
     * @maximum 100
     */
    age: number;
}
