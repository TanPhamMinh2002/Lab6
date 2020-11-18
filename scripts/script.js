let courseList1 = {
    name:  'ACIT',
    code: '1420',
    dsp: 'Intro to Systems Admin 1C',
};
    let courseList2 = {
        name: 'ACIT',
        code: '1620',
        dsp: 'Web Fundamental Technologies',
    };

let courseList = [courseList1, courseList2];
let check = 0;

user_input=prompt("Enter the course code:");
for (let item of courseList)
{
    if (item.code === user_input) {
        console.log(`Yes I am taking the course:  ${item.name} ${item.code} - ${item.dsp}`)
        check = 1;
    }
}
if (check === 0){
    courseList.push(courseList);
    console.log(`A new course was added`);
}