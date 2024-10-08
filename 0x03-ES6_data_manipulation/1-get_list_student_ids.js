export default function getListStudentIds(param) {
    const res = [];
    if (typeof param === 'object') {
	param.map((item) => res.push(item.id));
    }
    return res;
}
