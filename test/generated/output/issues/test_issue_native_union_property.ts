import typia from "typia";

type A = {
    createdAt: Date;
    value: number;
};
type B = {
    createdAt: Date;
    value: string;
};
type AB = A | B;
export const test_issue_native_union_property = () => {
    const matched: boolean[] = [
        {
            createdAt: new Date(),
            value: 10,
        },
        {
            createdAt: new Date(),
            value: "test",
        },
    ].map((input) => typia.is<AB>(input));
    if (matched.some((v) => v === false))
        throw new Error(
            "Bug on typia.is: failed to understand the native union property.",
        );
};
