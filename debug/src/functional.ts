import typia from "typia";

const sum = (x: number, y: number): number => x + y;

//----
// ASSERT
//----
// ASSERT-PARAMETERS
typia.functional.assertParameters(sum);

// ASSERT-RETURN
typia.functional.assertReturn(sum);

// ASSERT-FUNCTION
typia.functional.assertFunction(sum);

//----
// IS
//----
// IS-PARAMETERS
typia.functional.isParameters(sum);

// IS-RETURN
typia.functional.isReturn(sum);

// IS-FUNCTION
typia.functional.isFunction(sum);

//----
// VALIDATE
//----
// VALIDATE-PARAMETERS
typia.functional.validateParameters(sum);

// VALIDATE-RETURN
typia.functional.validateReturn(sum);

// VALIDATE-FUNCTION
typia.functional.validateFunction(sum);
