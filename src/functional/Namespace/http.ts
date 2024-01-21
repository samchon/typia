import { $HeadersReader } from "../$HeadersReader";
import { $ParameterReader } from "../$ParameterReader";
import { $QueryReader } from "../$QueryReader";

export const query = () => $QueryReader;
export const headers = () => $HeadersReader;
export const parameter = () => $ParameterReader;
