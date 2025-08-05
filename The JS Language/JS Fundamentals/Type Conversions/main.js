//Type Conversion - The process of changing the type of one value to another
// String Conversion - happens when we need the string form of a value.
value = String(value);
// Number Conversion
let num = Number(str);
// Numeric conversion rules:
// Value  ->	Becomes…
// undefined	->  NaN
// null	->  0
// true and false   ->	1 and 0
// string   ->	Whitespaces (includes spaces, tabs \t, newlines \n etc.) from the start and end are removed. If the remaining string is empty, the result is 0. Otherwise, the number is “read” from the string. An error gives NaN.

//Boolean Conversion
value = Boolean(value);
// The conversion rule:
// Values that are intuitively “empty”, like 0, an empty string, null, undefined, and NaN, become false.
// Other values become true.
