import { type IValidation, validate } from "typia";

interface ISomething {
  id: string;
  name: string;
}
const result: IValidation = validate<ISomething>({
  id: 1,
  name: 2,
});
console.log(result);
