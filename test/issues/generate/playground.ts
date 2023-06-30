import typia from "../../../src";

type YourType = {
    /**
     * @format uuid
     */
    id: string;
    /**
     * @format email
     */
    email: string;
    /**
     * @type uint
     * @minimum 20
     * @maximum 100
     */
    age: number;
    parent: YourType | null;
    children: YourType[];
};
((input: any): input is YourType => {
    const $is_uuid = (typia.createIs as any).is_uuid;
    const $is_email = (typia.createIs as any).is_email;
    const $io0 = (input: any): boolean =>
        "string" === typeof input.id &&
        $is_uuid(input.id) &&
        "string" === typeof input.email &&
        $is_email(input.email) &&
        "number" === typeof input.age &&
        parseInt(input.age) === input.age &&
        0 <= input.age &&
        20 <= input.age &&
        100 >= input.age &&
        (null === input.parent ||
            ("object" === typeof input.parent &&
                null !== input.parent &&
                $io0(input.parent))) &&
        Array.isArray(input.children) &&
        input.children.every(
            (elem: any) =>
                "object" === typeof elem && null !== elem && $io0(elem),
        );
    return "object" === typeof input && null !== input && $io0(input);
}).toString();
