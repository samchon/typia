import { $FormDataReader } from "../$FormDataReader";
import { $HeadersReader } from "../$HeadersReader";
import { $ParameterReader } from "../$ParameterReader";
import { $QueryReader } from "../$QueryReader";

export const formData = () => $FormDataReader;
export const headers = () => $HeadersReader;
export const parameter = () => $ParameterReader;
export const query = () => $QueryReader;
