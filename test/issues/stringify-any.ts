import typia from "typia";

interface ISomething {
    value?: any | null;
}

console.log(typia.json.createStringify<ISomething>().toString());
