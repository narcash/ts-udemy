/**
 * 

let info: {
    officeId: number;
    isOpened: boolean;
    contacts: {
        phone: string;
        email: string,
        address: {
            city: string
        }
    }
}
const skills: string[] = ['Dev', 'DevOps', 'Testing'];
for (const skill of skills) {
    console.log(skill.toUpperCase());
}

const res = skills
    .filter((s: string) => s !== 'Dev')
    .map(s => s + '1!')
    .reduce((a, b) => a + b)

console.log(res);

const skill: [number, string] = [1, 'Dev'];
// const id = skill[0];
// const skillName = skill[1];
//  skill.push('dev2');
//  skill.pop('dev3')
const [id, skillName] = skill;

const arr: [number, string, ...boolean[]] = [1, 'str', false]
 */

enum StatusCode {
    SUCCESS,
    IN_PROGRESS,
    FAILED
}
const res = {
    message: 'Платеж успешен!',
    statusCode: 10
}

if (res.statusCode === StatusCode.SUCCESS) {

}
function action(status: StatusCode) {

}
action(StatusCode.SUCCESS)

const enum Roles {
    ADMIN = 1,
    USER = 2
}

const res2 = Roles.ADMIN