import typia from "typia";

const validate = typia.createValidate<number>();
const result = validate(42);
if (result.success === true) console.log(result.data);
