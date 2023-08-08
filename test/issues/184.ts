import typia from "typia/lib/index";

const value: string | number = "something" as any;
if (typia.is<string>(value)) {
    typia.is(value);
}
