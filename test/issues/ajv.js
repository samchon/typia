function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate11(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate11.errors : vErrors.concat(validate11.errors);
errors = vErrors.length;
}
else {
}
validate10.errors = vErrors;
return errors === 0;
}



function validate0(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="http://json-schema.org/draft-07/schema#" */;
let vErrors = null;
let errors = 0;
if((!(data && typeof data == "object" && !Array.isArray(data))) && (typeof data !== "boolean")){
validate0.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: schema0.type},message:"must be object,boolean"}];
return false;
}
const _errs0 = errors;
if(errors === 0){
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.$id !== undefined){
let data0 = data.$id;
const _errs1 = errors;
const _errs2 = errors;
if(errors === _errs1){
if(typeof data0 == "number"){
}
if(errors === _errs1){
if(typeof data0 === "string"){
}
else {
validate0.errors = [{instancePath:instancePath+"/$id",schemaPath:"#/properties/%24id/type",keyword:"type",params:{type: "string"},message:"must be string"}];
return false;
}
if(errors === _errs1){
}
}
}
var valid0 = _errs1 === errors;
}
else {
var valid0 = true;
}
if(valid0){
if(data.$schema !== undefined){
let data1 = data.$schema;
const _errs3 = errors;
const _errs4 = errors;
if(errors === _errs3){
if(typeof data1 == "number"){
}
if(errors === _errs3){
if(typeof data1 === "string"){
}
else {
validate0.errors = [{instancePath:instancePath+"/$schema",schemaPath:"#/properties/%24schema/type",keyword:"type",params:{type: "string"},message:"must be string"}];
return false;
}
if(errors === _errs3){
}
}
}
var valid0 = _errs3 === errors;
}
else {
var valid0 = true;
}
if(valid0){
if(data.$ref !== undefined){
let data2 = data.$ref;
const _errs5 = errors;
const _errs6 = errors;
if(errors === _errs5){
if(typeof data2 == "number"){
}
if(errors === _errs5){
if(typeof data2 === "string"){
}
else {
validate0.errors = [{instancePath:instancePath+"/$ref",schemaPath:"#/properties/%24ref/type",keyword:"type",params:{type: "string"},message:"must be string"}];
return false;
}
if(errors === _errs5){
}
}
}
var valid0 = _errs5 === errors;
}
else {
var valid0 = true;
}
if(valid0){
if(data.$comment !== undefined){
let data3 = data.$comment;
const _errs7 = errors;
if(typeof data3 !== "string"){
validate0.errors = [{instancePath:instancePath+"/$comment",schemaPath:"#/properties/%24comment/type",keyword:"type",params:{type: "string"},message:"must be string"}];
return false;
}
const _errs8 = errors;
if(errors === _errs7){
}
var valid0 = _errs7 === errors;
}
else {
var valid0 = true;
}
if(valid0){
if(data.title !== undefined){
let data4 = data.title;
const _errs9 = errors;
if(typeof data4 !== "string"){
validate0.errors = [{instancePath:instancePath+"/title",schemaPath:"#/properties/title/type",keyword:"type",params:{type: "string"},message:"must be string"}];
return false;
}
const _errs10 = errors;
if(errors === _errs9){
}
var valid0 = _errs9 === errors;
}
else {
var valid0 = true;
}
if(valid0){
if(data.description !== undefined){
let data5 = data.description;
const _errs11 = errors;
if(typeof data5 !== "string"){
validate0.errors = [{instancePath:instancePath+"/description",schemaPath:"#/properties/description/type",keyword:"type",params:{type: "string"},message:"must be string"}];
return false;
}
const _errs12 = errors;
if(errors === _errs11){
}
var valid0 = _errs11 === errors;
}
else {
var valid0 = true;
}
if(valid0){
if(data.readOnly !== undefined){
let data6 = data.readOnly;
const _errs13 = errors;
if(typeof data6 !== "boolean"){
validate0.errors = [{instancePath:instancePath+"/readOnly",schemaPath:"#/properties/readOnly/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];
return false;
}
const _errs14 = errors;
if(errors === _errs13){
}
var valid0 = _errs13 === errors;
}
else {
var valid0 = true;
}
if(valid0){
if(data.examples !== undefined){
let data7 = data.examples;
const _errs15 = errors;
const _errs16 = errors;
if(errors === _errs15){
if(Array.isArray(data7)){
}
else {
validate0.errors = [{instancePath:instancePath+"/examples",schemaPath:"#/properties/examples/type",keyword:"type",params:{type: "array"},message:"must be array"}];
return false;
}
if(errors === _errs15){
}
}
var valid0 = _errs15 === errors;
}
else {
var valid0 = true;
}
if(valid0){
if(data.multipleOf !== undefined){
let data8 = data.multipleOf;
const _errs17 = errors;
const _errs18 = errors;
if(errors === _errs17){
if(typeof data8 == "number"){
if(data8 <= 0 || isNaN(data8)){
validate0.errors = [{instancePath:instancePath+"/multipleOf",schemaPath:"#/properties/multipleOf/exclusiveMinimum",keyword:"exclusiveMinimum",params:{comparison: ">", limit: 0},message:"must be > 0"}];
return false;
}
else {
}
}
else {
validate0.errors = [{instancePath:instancePath+"/multipleOf",schemaPath:"#/properties/multipleOf/type",keyword:"type",params:{type: "number"},message:"must be number"}];
return false;
}
if(errors === _errs17){
}
}
var valid0 = _errs17 === errors;
}
else {
var valid0 = true;
}
if(valid0){
if(data.maximum !== undefined){
let data9 = data.maximum;
const _errs19 = errors;
if(!(typeof data9 == "number")){
validate0.errors = [{instancePath:instancePath+"/maximum",schemaPath:"#/properties/maximum/type",keyword:"type",params:{type: "number"},message:"must be number"}];
return false;
}
const _errs20 = errors;
if(errors === _errs19){
}
var valid0 = _errs19 === errors;
}
else {
var valid0 = true;
}
if(valid0){
if(data.exclusiveMaximum !== undefined){
let data10 = data.exclusiveMaximum;
const _errs21 = errors;
if(!(typeof data10 == "number")){
validate0.errors = [{instancePath:instancePath+"/exclusiveMaximum",schemaPath:"#/properties/exclusiveMaximum/type",keyword:"type",params:{type: "number"},message:"must be number"}];
return false;
}
const _errs22 = errors;
if(errors === _errs21){
}
var valid0 = _errs21 === errors;
}
else {
var valid0 = true;
}
if(valid0){
if(data.minimum !== undefined){
let data11 = data.minimum;
const _errs23 = errors;
if(!(typeof data11 == "number")){
validate0.errors = [{instancePath:instancePath+"/minimum",schemaPath:"#/properties/minimum/type",keyword:"type",params:{type: "number"},message:"must be number"}];
return false;
}
const _errs24 = errors;
if(errors === _errs23){
}
var valid0 = _errs23 === errors;
}
else {
var valid0 = true;
}
if(valid0){
if(data.exclusiveMinimum !== undefined){
let data12 = data.exclusiveMinimum;
const _errs25 = errors;
if(!(typeof data12 == "number")){
validate0.errors = [{instancePath:instancePath+"/exclusiveMinimum",schemaPath:"#/properties/exclusiveMinimum/type",keyword:"type",params:{type: "number"},message:"must be number"}];
return false;
}
const _errs26 = errors;
if(errors === _errs25){
}
var valid0 = _errs25 === errors;
}
else {
var valid0 = true;
}
if(valid0){
if(data.maxLength !== undefined){
let data13 = data.maxLength;
const _errs27 = errors;
const _errs28 = errors;
if(!((typeof data13 == "number") && (!(data13 % 1) && !isNaN(data13)))){
validate0.errors = [{instancePath:instancePath+"/maxLength",schemaPath:"#/definitions/nonNegativeInteger/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];
return false;
}
const _errs29 = errors;
if(errors === _errs28){
if(typeof data13 == "number"){
if(data13 < 0 || isNaN(data13)){
validate0.errors = [{instancePath:instancePath+"/maxLength",schemaPath:"#/definitions/nonNegativeInteger/minimum",keyword:"minimum",params:{comparison: ">=", limit: 0},message:"must be >= 0"}];
return false;
}
else {
}
}
if(errors === _errs28){
}
}
var valid1 = _errs28 === errors;
if(valid1){
}
var valid0 = _errs27 === errors;
}
else {
var valid0 = true;
}
if(valid0){
if(data.minLength !== undefined){
let data14 = data.minLength;
const _errs30 = errors;
if(!(validate1(data14, {instancePath:instancePath+"/minLength",parentData:data,parentDataProperty:"minLength",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs30 === errors;
}
else {
var valid0 = true;
}
if(valid0){
if(data.pattern !== undefined){
let data15 = data.pattern;
const _errs31 = errors;
const _errs32 = errors;
if(errors === _errs31){
if(typeof data15 == "number"){
}
if(errors === _errs31){
if(typeof data15 === "string"){
}
else {
validate0.errors = [{instancePath:instancePath+"/pattern",schemaPath:"#/properties/pattern/type",keyword:"type",params:{type: "string"},message:"must be string"}];
return false;
}
if(errors === _errs31){
}
}
}
var valid0 = _errs31 === errors;
}
else {
var valid0 = true;
}
if(valid0){
if(data.additionalItems !== undefined){
let data16 = data.additionalItems;
const _errs33 = errors;
if(!(validate0(data16, {instancePath:instancePath+"/additionalItems",parentData:data,parentDataProperty:"additionalItems",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs33 === errors;
}
else {
var valid0 = true;
}
if(valid0){
if(data.items !== undefined){
let data17 = data.items;
const _errs34 = errors;
const _errs35 = errors;
let valid2 = false;
const _errs36 = errors;
if(!(validate0(data17, {instancePath:instancePath+"/items",parentData:data,parentDataProperty:"items",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var _valid0 = _errs36 === errors;
valid2 = valid2 || _valid0;
if(!valid2){
const _errs37 = errors;
if(!(validate3(data17, {instancePath:instancePath+"/items",parentData:data,parentDataProperty:"items",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
var _valid0 = _errs37 === errors;
valid2 = valid2 || _valid0;
if(!valid2){
}
}
if(!valid2){
const err0 = {instancePath:instancePath+"/items",schemaPath:"#/properties/items/anyOf",keyword:"anyOf",params:{},message:"must match a schema in anyOf"};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
validate0.errors = vErrors;
return false;
}
else {
errors = _errs35;
if(vErrors !== null){
if(_errs35){
vErrors.length = _errs35;
}
else {
vErrors = null;
}
}
}
if(errors === _errs34){
}
var valid0 = _errs34 === errors;
}
else {
var valid0 = true;
}
if(valid0){
if(data.maxItems !== undefined){
let data18 = data.maxItems;
const _errs38 = errors;
const _errs39 = errors;
if(!((typeof data18 == "number") && (!(data18 % 1) && !isNaN(data18)))){
validate0.errors = [{instancePath:instancePath+"/maxItems",schemaPath:"#/definitions/nonNegativeInteger/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];
return false;
}
const _errs40 = errors;
if(errors === _errs39){
if(typeof data18 == "number"){
if(data18 < 0 || isNaN(data18)){
validate0.errors = [{instancePath:instancePath+"/maxItems",schemaPath:"#/definitions/nonNegativeInteger/minimum",keyword:"minimum",params:{comparison: ">=", limit: 0},message:"must be >= 0"}];
return false;
}
else {
}
}
if(errors === _errs39){
}
}
var valid3 = _errs39 === errors;
if(valid3){
}
var valid0 = _errs38 === errors;
}
else {
var valid0 = true;
}
if(valid0){
if(data.minItems !== undefined){
let data19 = data.minItems;
const _errs41 = errors;
if(!(validate1(data19, {instancePath:instancePath+"/minItems",parentData:data,parentDataProperty:"minItems",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs41 === errors;
}
else {
var valid0 = true;
}
if(valid0){
if(data.uniqueItems !== undefined){
let data20 = data.uniqueItems;
const _errs42 = errors;
if(typeof data20 !== "boolean"){
validate0.errors = [{instancePath:instancePath+"/uniqueItems",schemaPath:"#/properties/uniqueItems/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];
return false;
}
const _errs43 = errors;
if(errors === _errs42){
}
var valid0 = _errs42 === errors;
}
else {
var valid0 = true;
}
if(valid0){
if(data.contains !== undefined){
let data21 = data.contains;
const _errs44 = errors;
if(!(validate0(data21, {instancePath:instancePath+"/contains",parentData:data,parentDataProperty:"contains",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs44 === errors;
}
else {
var valid0 = true;
}
if(valid0){
if(data.maxProperties !== undefined){
let data22 = data.maxProperties;
const _errs45 = errors;
const _errs46 = errors;
if(!((typeof data22 == "number") && (!(data22 % 1) && !isNaN(data22)))){
validate0.errors = [{instancePath:instancePath+"/maxProperties",schemaPath:"#/definitions/nonNegativeInteger/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];
return false;
}
const _errs47 = errors;
if(errors === _errs46){
if(typeof data22 == "number"){
if(data22 < 0 || isNaN(data22)){
validate0.errors = [{instancePath:instancePath+"/maxProperties",schemaPath:"#/definitions/nonNegativeInteger/minimum",keyword:"minimum",params:{comparison: ">=", limit: 0},message:"must be >= 0"}];
return false;
}
else {
}
}
if(errors === _errs46){
}
}
var valid4 = _errs46 === errors;
if(valid4){
}
var valid0 = _errs45 === errors;
}
else {
var valid0 = true;
}
if(valid0){
if(data.minProperties !== undefined){
let data23 = data.minProperties;
const _errs48 = errors;
if(!(validate1(data23, {instancePath:instancePath+"/minProperties",parentData:data,parentDataProperty:"minProperties",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs48 === errors;
}
else {
var valid0 = true;
}
if(valid0){
if(data.required !== undefined){
let data24 = data.required;
const _errs49 = errors;
const _errs50 = errors;
const _errs51 = errors;
if(errors === _errs50){
if(Array.isArray(data24)){
var valid6 = true;
const len0 = data24.length;
for(let i0=0; i0<len0; i0++){
let data25 = data24[i0];
const _errs52 = errors;
if(typeof data25 !== "string"){
validate0.errors = [{instancePath:instancePath+"/required/" + i0,schemaPath:"#/definitions/stringArray/items/type",keyword:"type",params:{type: "string"},message:"must be string"}];
return false;
}
const _errs53 = errors;
if(errors === _errs52){
}
var valid6 = _errs52 === errors;
if(!valid6){
break;
}
}
if(valid6){
let valid7;
let i1 = data24.length;
let j0;
valid7 = true;
if(i1 > 1){
const indices0 = {};
for(;i1--;){
let item0 = data24[i1];
if(typeof item0 !== "string"){
continue;
}
if(typeof indices0[item0] == "number"){
j0 = indices0[item0];
validate0.errors = [{instancePath:instancePath+"/required",schemaPath:"#/definitions/stringArray/uniqueItems",keyword:"uniqueItems",params:{i: i1, j: j0},message:"must NOT have duplicate items (items ## "+j0+" and "+i1+" are identical)"}];
return false;
valid7 = false;
break;
}
indices0[item0] = i1;
}
}
if(valid7){
}
}
}
else {
validate0.errors = [{instancePath:instancePath+"/required",schemaPath:"#/definitions/stringArray/type",keyword:"type",params:{type: "array"},message:"must be array"}];
return false;
}
if(errors === _errs50){
}
}
var valid5 = _errs50 === errors;
if(valid5){
}
var valid0 = _errs49 === errors;
}
else {
var valid0 = true;
}
if(valid0){
if(data.additionalProperties !== undefined){
let data26 = data.additionalProperties;
const _errs54 = errors;
if(!(validate0(data26, {instancePath:instancePath+"/additionalProperties",parentData:data,parentDataProperty:"additionalProperties",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs54 === errors;
}
else {
var valid0 = true;
}
if(valid0){
if(data.definitions !== undefined){
let data27 = data.definitions;
const _errs55 = errors;
const _errs56 = errors;
if(errors === _errs55){
if(data27 && typeof data27 == "object" && !Array.isArray(data27)){
const _errs57 = errors;
for(const key0 in data27){
let data28 = data27[key0];
const _errs58 = errors;
if(!(validate0(data28, {instancePath:instancePath+"/definitions/" + key0.replace(/~/g, "~0").replace(/\//g, "~1"),parentData:data27,parentDataProperty:key0,rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid8 = _errs58 === errors;
if(!valid8){
break;
}
}
if(_errs57 === errors){
}
}
else {
validate0.errors = [{instancePath:instancePath+"/definitions",schemaPath:"#/properties/definitions/type",keyword:"type",params:{type: "object"},message:"must be object"}];
return false;
}
if(errors === _errs55){
}
}
var valid0 = _errs55 === errors;
}
else {
var valid0 = true;
}
if(valid0){
if(data.properties !== undefined){
let data29 = data.properties;
const _errs59 = errors;
const _errs60 = errors;
if(errors === _errs59){
if(data29 && typeof data29 == "object" && !Array.isArray(data29)){
const _errs61 = errors;
for(const key1 in data29){
let data30 = data29[key1];
const _errs62 = errors;
if(!(validate0(data30, {instancePath:instancePath+"/properties/" + key1.replace(/~/g, "~0").replace(/\//g, "~1"),parentData:data29,parentDataProperty:key1,rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid9 = _errs62 === errors;
if(!valid9){
break;
}
}
if(_errs61 === errors){
}
}
else {
validate0.errors = [{instancePath:instancePath+"/properties",schemaPath:"#/properties/properties/type",keyword:"type",params:{type: "object"},message:"must be object"}];
return false;
}
if(errors === _errs59){
}
}
var valid0 = _errs59 === errors;
}
else {
var valid0 = true;
}
if(valid0){
if(data.patternProperties !== undefined){
let data31 = data.patternProperties;
const _errs63 = errors;
const _errs64 = errors;
if(errors === _errs63){
if(data31 && typeof data31 == "object" && !Array.isArray(data31)){
for(const key2 in data31){
const _errs65 = errors;
if(typeof key2 == "number"){
}
if(errors === _errs65){
if(typeof key2 === "string"){
}
if(errors === _errs65){
}
}
var valid10 = _errs65 === errors;
if(!valid10){
const err1 = {instancePath:instancePath+"/patternProperties",schemaPath:"#/properties/patternProperties/propertyNames",keyword:"propertyNames",params:{propertyName: key2},message:"property name must be valid"};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
validate0.errors = vErrors;
return false;
break;
}
}
if(valid10){
const _errs66 = errors;
for(const key3 in data31){
let data32 = data31[key3];
const _errs67 = errors;
if(!(validate0(data32, {instancePath:instancePath+"/patternProperties/" + key3.replace(/~/g, "~0").replace(/\//g, "~1"),parentData:data31,parentDataProperty:key3,rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid11 = _errs67 === errors;
if(!valid11){
break;
}
}
if(_errs66 === errors){
}
}
}
else {
validate0.errors = [{instancePath:instancePath+"/patternProperties",schemaPath:"#/properties/patternProperties/type",keyword:"type",params:{type: "object"},message:"must be object"}];
return false;
}
if(errors === _errs63){
}
}
var valid0 = _errs63 === errors;
}
else {
var valid0 = true;
}
if(valid0){
if(data.dependencies !== undefined){
let data33 = data.dependencies;
const _errs68 = errors;
const _errs69 = errors;
if(errors === _errs68){
if(data33 && typeof data33 == "object" && !Array.isArray(data33)){
const _errs70 = errors;
for(const key4 in data33){
let data34 = data33[key4];
const _errs71 = errors;
const _errs72 = errors;
let valid13 = false;
const _errs73 = errors;
if(!(validate0(data34, {instancePath:instancePath+"/dependencies/" + key4.replace(/~/g, "~0").replace(/\//g, "~1"),parentData:data33,parentDataProperty:key4,rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var _valid1 = _errs73 === errors;
valid13 = valid13 || _valid1;
if(!valid13){
const _errs74 = errors;
const _errs75 = errors;
const _errs76 = errors;
if(errors === _errs75){
if(Array.isArray(data34)){
var valid15 = true;
const len1 = data34.length;
for(let i2=0; i2<len1; i2++){
let data35 = data34[i2];
const _errs77 = errors;
if(typeof data35 !== "string"){
const err2 = {instancePath:instancePath+"/dependencies/" + key4.replace(/~/g, "~0").replace(/\//g, "~1")+"/" + i2,schemaPath:"#/definitions/stringArray/items/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err2];
}
else {
vErrors.push(err2);
}
errors++;
}
const _errs78 = errors;
if(errors === _errs77){
}
var valid15 = _errs77 === errors;
if(!valid15){
break;
}
}
if(valid15){
let valid16;
let i3 = data34.length;
let j1;
valid16 = true;
if(i3 > 1){
const indices1 = {};
for(;i3--;){
let item1 = data34[i3];
if(typeof item1 !== "string"){
continue;
}
if(typeof indices1[item1] == "number"){
j1 = indices1[item1];
const err3 = {instancePath:instancePath+"/dependencies/" + key4.replace(/~/g, "~0").replace(/\//g, "~1"),schemaPath:"#/definitions/stringArray/uniqueItems",keyword:"uniqueItems",params:{i: i3, j: j1},message:"must NOT have duplicate items (items ## "+j1+" and "+i3+" are identical)"};
if(vErrors === null){
vErrors = [err3];
}
else {
vErrors.push(err3);
}
errors++;
valid16 = false;
break;
}
indices1[item1] = i3;
}
}
if(valid16){
}
}
}
else {
const err4 = {instancePath:instancePath+"/dependencies/" + key4.replace(/~/g, "~0").replace(/\//g, "~1"),schemaPath:"#/definitions/stringArray/type",keyword:"type",params:{type: "array"},message:"must be array"};
if(vErrors === null){
vErrors = [err4];
}
else {
vErrors.push(err4);
}
errors++;
}
if(errors === _errs75){
}
}
var valid14 = _errs75 === errors;
if(valid14){
}
var _valid1 = _errs74 === errors;
valid13 = valid13 || _valid1;
if(!valid13){
}
}
if(!valid13){
const err5 = {instancePath:instancePath+"/dependencies/" + key4.replace(/~/g, "~0").replace(/\//g, "~1"),schemaPath:"#/properties/dependencies/additionalProperties/anyOf",keyword:"anyOf",params:{},message:"must match a schema in anyOf"};
if(vErrors === null){
vErrors = [err5];
}
else {
vErrors.push(err5);
}
errors++;
validate0.errors = vErrors;
return false;
}
else {
errors = _errs72;
if(vErrors !== null){
if(_errs72){
vErrors.length = _errs72;
}
else {
vErrors = null;
}
}
}
if(errors === _errs71){
}
var valid12 = _errs71 === errors;
if(!valid12){
break;
}
}
if(_errs70 === errors){
}
}
else {
validate0.errors = [{instancePath:instancePath+"/dependencies",schemaPath:"#/properties/dependencies/type",keyword:"type",params:{type: "object"},message:"must be object"}];
return false;
}
if(errors === _errs68){
}
}
var valid0 = _errs68 === errors;
}
else {
var valid0 = true;
}
if(valid0){
if(data.propertyNames !== undefined){
let data36 = data.propertyNames;
const _errs79 = errors;
if(!(validate0(data36, {instancePath:instancePath+"/propertyNames",parentData:data,parentDataProperty:"propertyNames",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs79 === errors;
}
else {
var valid0 = true;
}
if(valid0){
if(data.enum !== undefined){
let data37 = data.enum;
const _errs80 = errors;
const _errs81 = errors;
if(errors === _errs80){
if(Array.isArray(data37)){
if(data37.length < 1){
validate0.errors = [{instancePath:instancePath+"/enum",schemaPath:"#/properties/enum/minItems",keyword:"minItems",params:{limit: 1},message:"must NOT have fewer than 1 items"}];
return false;
}
else {
let valid17;
let i4 = data37.length;
let j2;
valid17 = true;
if(i4 > 1){
outer0:
for(;i4--;){
for(j2 = i4; j2--;){
if(func0(data37[i4], data37[j2])){
validate0.errors = [{instancePath:instancePath+"/enum",schemaPath:"#/properties/enum/uniqueItems",keyword:"uniqueItems",params:{i: i4, j: j2},message:"must NOT have duplicate items (items ## "+j2+" and "+i4+" are identical)"}];
return false;
valid17 = false;
break outer0;
}
}
}
}
if(valid17){
}
}
}
else {
validate0.errors = [{instancePath:instancePath+"/enum",schemaPath:"#/properties/enum/type",keyword:"type",params:{type: "array"},message:"must be array"}];
return false;
}
if(errors === _errs80){
}
}
var valid0 = _errs80 === errors;
}
else {
var valid0 = true;
}
if(valid0){
if(data.type !== undefined){
let data38 = data.type;
const _errs82 = errors;
const _errs83 = errors;
let valid18 = false;
const _errs84 = errors;
const _errs85 = errors;
const vSchema0 = schema9.enum;
if(!(((((((data38 === "array") || (data38 === "boolean")) || (data38 === "integer")) || (data38 === "null")) || (data38 === "number")) || (data38 === "object")) || (data38 === "string"))){
const err6 = {instancePath:instancePath+"/type",schemaPath:"#/definitions/simpleTypes/enum",keyword:"enum",params:{allowedValues: schema9.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err6];
}
else {
vErrors.push(err6);
}
errors++;
}
else {
}
if(errors === _errs85){
}
var valid19 = _errs85 === errors;
if(valid19){
}
var _valid2 = _errs84 === errors;
valid18 = valid18 || _valid2;
if(!valid18){
const _errs86 = errors;
const _errs87 = errors;
if(errors === _errs86){
if(Array.isArray(data38)){
if(data38.length < 1){
const err7 = {instancePath:instancePath+"/type",schemaPath:"#/properties/type/anyOf/1/minItems",keyword:"minItems",params:{limit: 1},message:"must NOT have fewer than 1 items"};
if(vErrors === null){
vErrors = [err7];
}
else {
vErrors.push(err7);
}
errors++;
}
else {
var valid20 = true;
const len2 = data38.length;
for(let i5=0; i5<len2; i5++){
let data39 = data38[i5];
const _errs88 = errors;
const _errs89 = errors;
const vSchema1 = schema9.enum;
if(!(((((((data39 === "array") || (data39 === "boolean")) || (data39 === "integer")) || (data39 === "null")) || (data39 === "number")) || (data39 === "object")) || (data39 === "string"))){
const err8 = {instancePath:instancePath+"/type/" + i5,schemaPath:"#/definitions/simpleTypes/enum",keyword:"enum",params:{allowedValues: schema9.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err8];
}
else {
vErrors.push(err8);
}
errors++;
}
else {
}
if(errors === _errs89){
}
var valid21 = _errs89 === errors;
if(valid21){
}
var valid20 = _errs88 === errors;
if(!valid20){
break;
}
}
if(valid20){
let valid22;
let i6 = data38.length;
let j3;
valid22 = true;
if(i6 > 1){
outer1:
for(;i6--;){
for(j3 = i6; j3--;){
if(func0(data38[i6], data38[j3])){
const err9 = {instancePath:instancePath+"/type",schemaPath:"#/properties/type/anyOf/1/uniqueItems",keyword:"uniqueItems",params:{i: i6, j: j3},message:"must NOT have duplicate items (items ## "+j3+" and "+i6+" are identical)"};
if(vErrors === null){
vErrors = [err9];
}
else {
vErrors.push(err9);
}
errors++;
valid22 = false;
break outer1;
}
}
}
}
if(valid22){
}
}
}
}
else {
const err10 = {instancePath:instancePath+"/type",schemaPath:"#/properties/type/anyOf/1/type",keyword:"type",params:{type: "array"},message:"must be array"};
if(vErrors === null){
vErrors = [err10];
}
else {
vErrors.push(err10);
}
errors++;
}
if(errors === _errs86){
}
}
var _valid2 = _errs86 === errors;
valid18 = valid18 || _valid2;
if(!valid18){
}
}
if(!valid18){
const err11 = {instancePath:instancePath+"/type",schemaPath:"#/properties/type/anyOf",keyword:"anyOf",params:{},message:"must match a schema in anyOf"};
if(vErrors === null){
vErrors = [err11];
}
else {
vErrors.push(err11);
}
errors++;
validate0.errors = vErrors;
return false;
}
else {
errors = _errs83;
if(vErrors !== null){
if(_errs83){
vErrors.length = _errs83;
}
else {
vErrors = null;
}
}
}
if(errors === _errs82){
}
var valid0 = _errs82 === errors;
}
else {
var valid0 = true;
}
if(valid0){
if(data.format !== undefined){
let data40 = data.format;
const _errs90 = errors;
if(typeof data40 !== "string"){
validate0.errors = [{instancePath:instancePath+"/format",schemaPath:"#/properties/format/type",keyword:"type",params:{type: "string"},message:"must be string"}];
return false;
}
const _errs91 = errors;
if(errors === _errs90){
}
var valid0 = _errs90 === errors;
}
else {
var valid0 = true;
}
if(valid0){
if(data.contentMediaType !== undefined){
let data41 = data.contentMediaType;
const _errs92 = errors;
if(typeof data41 !== "string"){
validate0.errors = [{instancePath:instancePath+"/contentMediaType",schemaPath:"#/properties/contentMediaType/type",keyword:"type",params:{type: "string"},message:"must be string"}];
return false;
}
const _errs93 = errors;
if(errors === _errs92){
}
var valid0 = _errs92 === errors;
}
else {
var valid0 = true;
}
if(valid0){
if(data.contentEncoding !== undefined){
let data42 = data.contentEncoding;
const _errs94 = errors;
if(typeof data42 !== "string"){
validate0.errors = [{instancePath:instancePath+"/contentEncoding",schemaPath:"#/properties/contentEncoding/type",keyword:"type",params:{type: "string"},message:"must be string"}];
return false;
}
const _errs95 = errors;
if(errors === _errs94){
}
var valid0 = _errs94 === errors;
}
else {
var valid0 = true;
}
if(valid0){
if(data.if !== undefined){
let data43 = data.if;
const _errs96 = errors;
if(!(validate0(data43, {instancePath:instancePath+"/if",parentData:data,parentDataProperty:"if",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs96 === errors;
}
else {
var valid0 = true;
}
if(valid0){
if(data.then !== undefined){
let data44 = data.then;
const _errs97 = errors;
if(!(validate0(data44, {instancePath:instancePath+"/then",parentData:data,parentDataProperty:"then",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs97 === errors;
}
else {
var valid0 = true;
}
if(valid0){
if(data.else !== undefined){
let data45 = data.else;
const _errs98 = errors;
if(!(validate0(data45, {instancePath:instancePath+"/else",parentData:data,parentDataProperty:"else",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs98 === errors;
}
else {
var valid0 = true;
}
if(valid0){
if(data.allOf !== undefined){
let data46 = data.allOf;
const _errs99 = errors;
if(!(validate3(data46, {instancePath:instancePath+"/allOf",parentData:data,parentDataProperty:"allOf",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs99 === errors;
}
else {
var valid0 = true;
}
if(valid0){
if(data.anyOf !== undefined){
let data47 = data.anyOf;
const _errs100 = errors;
if(!(validate3(data47, {instancePath:instancePath+"/anyOf",parentData:data,parentDataProperty:"anyOf",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs100 === errors;
}
else {
var valid0 = true;
}
if(valid0){
if(data.oneOf !== undefined){
let data48 = data.oneOf;
const _errs101 = errors;
if(!(validate3(data48, {instancePath:instancePath+"/oneOf",parentData:data,parentDataProperty:"oneOf",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs101 === errors;
}
else {
var valid0 = true;
}
if(valid0){
if(data.not !== undefined){
let data49 = data.not;
const _errs102 = errors;
if(!(validate0(data49, {instancePath:instancePath+"/not",parentData:data,parentDataProperty:"not",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs102 === errors;
}
else {
var valid0 = true;
}
if(valid0){
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
if(errors === 0){
}
}
validate0.errors = vErrors;
return errors === 0;
}



function validate11(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="#/components/schemas/Collection" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(errors === 0){
if(data && typeof data == "object" && !Array.isArray(data)){
let missing0;
if((data.data === undefined) && (missing0 = "data")){
validate11.errors = [{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];
return false;
}
else {
if(data.data !== undefined){
let data0 = data.data;
const _errs1 = errors;
const _errs2 = errors;
if(errors === _errs1){
if(Array.isArray(data0)){
var valid1 = true;
const len0 = data0.length;
for(let i0=0; i0<len0; i0++){
let data1 = data0[i0];
const _errs3 = errors;
if(!(validate12(data1, {instancePath:instancePath+"/data/" + i0,parentData:data0,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate12.errors : vErrors.concat(validate12.errors);
errors = vErrors.length;
}
else {
}
var valid1 = _errs3 === errors;
if(!valid1){
break;
}
}
if(valid1){
}
}
else {
validate11.errors = [{instancePath:instancePath+"/data",schemaPath:"#/properties/data/type",keyword:"type",params:{type: "array"},message:"must be array"}];
return false;
}
if(errors === _errs1){
}
}
var valid0 = _errs1 === errors;
}
else {
var valid0 = true;
}
if(valid0){
}
}
}
else {
validate11.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];
return false;
}
if(errors === 0){
}
}
validate11.errors = vErrors;
return errors === 0;
}



function validate12(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="#/components/schemas/ObjectSimple.IBox3D" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(errors === 0){
if(data && typeof data == "object" && !Array.isArray(data)){
let missing0;
if(((((data.scale === undefined) && (missing0 = "scale")) || ((data.position === undefined) && (missing0 = "position"))) || ((data.rotate === undefined) && (missing0 = "rotate"))) || ((data.pivot === undefined) && (missing0 = "pivot"))){
validate12.errors = [{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];
return false;
}
else {
if(data.scale !== undefined){
let data0 = data.scale;
const _errs1 = errors;
const _errs2 = errors;
const _errs3 = errors;
if(errors === _errs2){
if(data0 && typeof data0 == "object" && !Array.isArray(data0)){
let missing1;
if((((data0.x === undefined) && (missing1 = "x")) || ((data0.y === undefined) && (missing1 = "y"))) || ((data0.z === undefined) && (missing1 = "z"))){
validate12.errors = [{instancePath:instancePath+"/scale",schemaPath:"#/components/schemas/ObjectSimple.IPoint3D/required",keyword:"required",params:{missingProperty: missing1},message:"must have required property '"+missing1+"'"}];
return false;
}
else {
if(data0.x !== undefined){
let data1 = data0.x;
const _errs4 = errors;
if(!(typeof data1 == "number")){
validate12.errors = [{instancePath:instancePath+"/scale/x",schemaPath:"#/components/schemas/ObjectSimple.IPoint3D/properties/x/type",keyword:"type",params:{type: "number"},message:"must be number"}];
return false;
}
const _errs5 = errors;
if(errors === _errs4){
}
var valid2 = _errs4 === errors;
}
else {
var valid2 = true;
}
if(valid2){
if(data0.y !== undefined){
let data2 = data0.y;
const _errs6 = errors;
if(!(typeof data2 == "number")){
validate12.errors = [{instancePath:instancePath+"/scale/y",schemaPath:"#/components/schemas/ObjectSimple.IPoint3D/properties/y/type",keyword:"type",params:{type: "number"},message:"must be number"}];
return false;
}
const _errs7 = errors;
if(errors === _errs6){
}
var valid2 = _errs6 === errors;
}
else {
var valid2 = true;
}
if(valid2){
if(data0.z !== undefined){
let data3 = data0.z;
const _errs8 = errors;
if(!(typeof data3 == "number")){
validate12.errors = [{instancePath:instancePath+"/scale/z",schemaPath:"#/components/schemas/ObjectSimple.IPoint3D/properties/z/type",keyword:"type",params:{type: "number"},message:"must be number"}];
return false;
}
const _errs9 = errors;
if(errors === _errs8){
}
var valid2 = _errs8 === errors;
}
else {
var valid2 = true;
}
if(valid2){
}
}
}
}
}
else {
validate12.errors = [{instancePath:instancePath+"/scale",schemaPath:"#/components/schemas/ObjectSimple.IPoint3D/type",keyword:"type",params:{type: "object"},message:"must be object"}];
return false;
}
if(errors === _errs2){
}
}
var valid1 = _errs2 === errors;
if(valid1){
}
var valid0 = _errs1 === errors;
}
else {
var valid0 = true;
}
if(valid0){
if(data.position !== undefined){
let data4 = data.position;
const _errs10 = errors;
const _errs11 = errors;
const _errs12 = errors;
if(errors === _errs11){
if(data4 && typeof data4 == "object" && !Array.isArray(data4)){
let missing2;
if((((data4.x === undefined) && (missing2 = "x")) || ((data4.y === undefined) && (missing2 = "y"))) || ((data4.z === undefined) && (missing2 = "z"))){
validate12.errors = [{instancePath:instancePath+"/position",schemaPath:"#/components/schemas/ObjectSimple.IPoint3D/required",keyword:"required",params:{missingProperty: missing2},message:"must have required property '"+missing2+"'"}];
return false;
}
else {
if(data4.x !== undefined){
let data5 = data4.x;
const _errs13 = errors;
if(!(typeof data5 == "number")){
validate12.errors = [{instancePath:instancePath+"/position/x",schemaPath:"#/components/schemas/ObjectSimple.IPoint3D/properties/x/type",keyword:"type",params:{type: "number"},message:"must be number"}];
return false;
}
const _errs14 = errors;
if(errors === _errs13){
}
var valid4 = _errs13 === errors;
}
else {
var valid4 = true;
}
if(valid4){
if(data4.y !== undefined){
let data6 = data4.y;
const _errs15 = errors;
if(!(typeof data6 == "number")){
validate12.errors = [{instancePath:instancePath+"/position/y",schemaPath:"#/components/schemas/ObjectSimple.IPoint3D/properties/y/type",keyword:"type",params:{type: "number"},message:"must be number"}];
return false;
}
const _errs16 = errors;
if(errors === _errs15){
}
var valid4 = _errs15 === errors;
}
else {
var valid4 = true;
}
if(valid4){
if(data4.z !== undefined){
let data7 = data4.z;
const _errs17 = errors;
if(!(typeof data7 == "number")){
validate12.errors = [{instancePath:instancePath+"/position/z",schemaPath:"#/components/schemas/ObjectSimple.IPoint3D/properties/z/type",keyword:"type",params:{type: "number"},message:"must be number"}];
return false;
}
const _errs18 = errors;
if(errors === _errs17){
}
var valid4 = _errs17 === errors;
}
else {
var valid4 = true;
}
if(valid4){
}
}
}
}
}
else {
validate12.errors = [{instancePath:instancePath+"/position",schemaPath:"#/components/schemas/ObjectSimple.IPoint3D/type",keyword:"type",params:{type: "object"},message:"must be object"}];
return false;
}
if(errors === _errs11){
}
}
var valid3 = _errs11 === errors;
if(valid3){
}
var valid0 = _errs10 === errors;
}
else {
var valid0 = true;
}
if(valid0){
if(data.rotate !== undefined){
let data8 = data.rotate;
const _errs19 = errors;
const _errs20 = errors;
const _errs21 = errors;
if(errors === _errs20){
if(data8 && typeof data8 == "object" && !Array.isArray(data8)){
let missing3;
if((((data8.x === undefined) && (missing3 = "x")) || ((data8.y === undefined) && (missing3 = "y"))) || ((data8.z === undefined) && (missing3 = "z"))){
validate12.errors = [{instancePath:instancePath+"/rotate",schemaPath:"#/components/schemas/ObjectSimple.IPoint3D/required",keyword:"required",params:{missingProperty: missing3},message:"must have required property '"+missing3+"'"}];
return false;
}
else {
if(data8.x !== undefined){
let data9 = data8.x;
const _errs22 = errors;
if(!(typeof data9 == "number")){
validate12.errors = [{instancePath:instancePath+"/rotate/x",schemaPath:"#/components/schemas/ObjectSimple.IPoint3D/properties/x/type",keyword:"type",params:{type: "number"},message:"must be number"}];
return false;
}
const _errs23 = errors;
if(errors === _errs22){
}
var valid6 = _errs22 === errors;
}
else {
var valid6 = true;
}
if(valid6){
if(data8.y !== undefined){
let data10 = data8.y;
const _errs24 = errors;
if(!(typeof data10 == "number")){
validate12.errors = [{instancePath:instancePath+"/rotate/y",schemaPath:"#/components/schemas/ObjectSimple.IPoint3D/properties/y/type",keyword:"type",params:{type: "number"},message:"must be number"}];
return false;
}
const _errs25 = errors;
if(errors === _errs24){
}
var valid6 = _errs24 === errors;
}
else {
var valid6 = true;
}
if(valid6){
if(data8.z !== undefined){
let data11 = data8.z;
const _errs26 = errors;
if(!(typeof data11 == "number")){
validate12.errors = [{instancePath:instancePath+"/rotate/z",schemaPath:"#/components/schemas/ObjectSimple.IPoint3D/properties/z/type",keyword:"type",params:{type: "number"},message:"must be number"}];
return false;
}
const _errs27 = errors;
if(errors === _errs26){
}
var valid6 = _errs26 === errors;
}
else {
var valid6 = true;
}
if(valid6){
}
}
}
}
}
else {
validate12.errors = [{instancePath:instancePath+"/rotate",schemaPath:"#/components/schemas/ObjectSimple.IPoint3D/type",keyword:"type",params:{type: "object"},message:"must be object"}];
return false;
}
if(errors === _errs20){
}
}
var valid5 = _errs20 === errors;
if(valid5){
}
var valid0 = _errs19 === errors;
}
else {
var valid0 = true;
}
if(valid0){
if(data.pivot !== undefined){
let data12 = data.pivot;
const _errs28 = errors;
const _errs29 = errors;
const _errs30 = errors;
if(errors === _errs29){
if(data12 && typeof data12 == "object" && !Array.isArray(data12)){
let missing4;
if((((data12.x === undefined) && (missing4 = "x")) || ((data12.y === undefined) && (missing4 = "y"))) || ((data12.z === undefined) && (missing4 = "z"))){
validate12.errors = [{instancePath:instancePath+"/pivot",schemaPath:"#/components/schemas/ObjectSimple.IPoint3D/required",keyword:"required",params:{missingProperty: missing4},message:"must have required property '"+missing4+"'"}];
return false;
}
else {
if(data12.x !== undefined){
let data13 = data12.x;
const _errs31 = errors;
if(!(typeof data13 == "number")){
validate12.errors = [{instancePath:instancePath+"/pivot/x",schemaPath:"#/components/schemas/ObjectSimple.IPoint3D/properties/x/type",keyword:"type",params:{type: "number"},message:"must be number"}];
return false;
}
const _errs32 = errors;
if(errors === _errs31){
}
var valid8 = _errs31 === errors;
}
else {
var valid8 = true;
}
if(valid8){
if(data12.y !== undefined){
let data14 = data12.y;
const _errs33 = errors;
if(!(typeof data14 == "number")){
validate12.errors = [{instancePath:instancePath+"/pivot/y",schemaPath:"#/components/schemas/ObjectSimple.IPoint3D/properties/y/type",keyword:"type",params:{type: "number"},message:"must be number"}];
return false;
}
const _errs34 = errors;
if(errors === _errs33){
}
var valid8 = _errs33 === errors;
}
else {
var valid8 = true;
}
if(valid8){
if(data12.z !== undefined){
let data15 = data12.z;
const _errs35 = errors;
if(!(typeof data15 == "number")){
validate12.errors = [{instancePath:instancePath+"/pivot/z",schemaPath:"#/components/schemas/ObjectSimple.IPoint3D/properties/z/type",keyword:"type",params:{type: "number"},message:"must be number"}];
return false;
}
const _errs36 = errors;
if(errors === _errs35){
}
var valid8 = _errs35 === errors;
}
else {
var valid8 = true;
}
if(valid8){
}
}
}
}
}
else {
validate12.errors = [{instancePath:instancePath+"/pivot",schemaPath:"#/components/schemas/ObjectSimple.IPoint3D/type",keyword:"type",params:{type: "object"},message:"must be object"}];
return false;
}
if(errors === _errs29){
}
}
var valid7 = _errs29 === errors;
if(valid7){
}
var valid0 = _errs28 === errors;
}
else {
var valid0 = true;
}
if(valid0){
}
}
}
}
}
}
else {
validate12.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];
return false;
}
if(errors === 0){
}
}
validate12.errors = vErrors;
return errors === 0;
}



