import typia from "typia";

const department: IDepartment = typia.random<IDepartment>();
const json: string | null = typia.isStringify(department);

console.log(json);

interface IDepartment {
    /**
     * @format uuid
     */
    id: string;

    /**
     * @minLength 3
     */
    name: string;

    /**
     * @type int
     */
    limit: number;

    clerks: IClerk[];
}
interface IClerk {
    name: string;

    /**
     * @type int
     * @exclusiveMinimum 19
     * @maximum 100
     */
    age: number;

    authority: number;

    /**
     * @format date
     */
    joined_at: string;
}
