import typia from "typia";

declare const token: unique symbol;
typia.validate<typeof token>("wrong");
