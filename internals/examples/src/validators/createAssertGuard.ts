import typia, { AssertionGuard } from "typia";

//MUST DECLARE THE VARIABLE TYPE
const explicit: AssertionGuard<number> = typia.createAssertGuard<number>();

// IF NOT, COMPILATION ERROR BE OCCURRED
const implicit = typia.createAssertGuard<number>();
