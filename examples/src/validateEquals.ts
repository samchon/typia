import typia from "typia";

const res: typia.IValidation<IMember> = typia.validateEquals<IMember>({
    age: 30,
    email: "samchon.github@gmail.com",
    id: 5, // wrong, must be string (uuid)
    sex: 1, // extra property
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
