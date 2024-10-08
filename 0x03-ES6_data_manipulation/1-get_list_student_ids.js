export default function getListStudentIds(param) {
    const res = [];
    if (typeof param === 'object') {
	param.map((item) => res.push(item.id));
    }
    return res;
}






// Given an list of object, return only the array of ids

// Create a function getListStudentIds that returns an array of ids from a list of object./

// This function is taking one argument which is an array of objects - and this array is the same format as getListStudents from the previous task.

// If the argument is not an array, the function is returning an empty array.

// You must use the map function on the array.
