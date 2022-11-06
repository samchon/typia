import { type IValidation, validate } from "../../src";

interface ISomething {
    id: string;
    name: string;
}
const result: IValidation = validate<ISomething>({
    id: 1,
    name: 2,
});
console.log(result);
