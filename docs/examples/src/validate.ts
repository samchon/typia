import typia from "typia";

const res: typia.IValidation<IMember> = typia.validate<IMember>({
    id: 5, // wrong, must be string (uuid)
    age: 20.75, // wrong, not integer
    email: "samchon.github@gmail.com",
});

if (!res.success) console.log(res.errors);

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
