import TSON from "../../src";

type PrefixedString = `some_value/${string}`;

const a: PrefixedString = "some_value/abc";
TSON.assert<PrefixedString>(a);
