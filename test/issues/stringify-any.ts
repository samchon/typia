import typia from "typia";

interface ISomething {
    value?: any | null;
}

console.log(typia.createStringify<ISomething>().toString());
