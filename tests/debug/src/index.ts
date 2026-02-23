import * as core from "@typia/core";
import * as transform from "@typia/transform";
import * as utils from "@typia/utils";
import typia from "typia";

typia;
core;
transform;
utils;

console.log(typia.createIs<number>().toString());
