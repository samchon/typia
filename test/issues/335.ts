import typia from "../../src";

type PrefixedString = `some_value/${string}`;

const a: PrefixedString = "some_value/abc";
typia.assert<PrefixedString>(a);
