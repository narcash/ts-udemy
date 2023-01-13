"use strict";
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
 */
const skill = [1, 'Dev'];
// const id = skill[0];
// const skillName = skill[1];
//  skill.push('dev2');
//  skill.pop('dev3')
const [id, skillName] = skill;
const arr = [1, 'str', true, true, false];
