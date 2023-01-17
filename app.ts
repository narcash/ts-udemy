/**
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
test2
enum QuestionStatus {
    Published = "published",
    Draft = "draft",
    Deleted = "deleted"
}
async function getFaqs(req: {
    topicId: number;
    status?: QuestionStatus
}): Promise<{
    question: string;
    answer: string;
    tags: string[];
    likes: number,
    status: QuestionStatus
}[]> {
    const res = await fetch('/faqs', {
        method: 'POST',
        body: JSON.stringify(req)
    })
    const data = await res.json();
    return data
}

// ****************  Union

function logID(id: string | number | boolean) {
    if (typeof id === 'string') {
        console.log(id);
    } else if (typeof id === 'number') {
        console.log(id);
    } else {
        console.log(id);
    }

}
function logError(err: string | string[]) {
    if (Array.isArray(err)) {
        console.log(err);
    } else {
        console.log(err);
    }
}

function logObj(obj: { a: number } | { b: number }) {
    if ('a' in obj) {
        console.log(obj.a);
    } else {
        console.log(obj.b);
    }
}

function logMultipleIds(a: string | number, b: string | boolean) {
    if( a===b) {

    } else {
    }
}

//  **************** literal types
// enum RequestType {
//     GET = 'get',
//     POST = 'post'
// }
function fetchWithAuth(url: string, method: 'post' | 'get') {

}
fetchWithAuth('a', 'post');
fetchWithAuth('s', 'get');
let method = 'post';
fetchWithAuth('a', method as 'post')

// Types Aliases

type User = {
    name: string,
    age: number,
    skills: string[]
}

 let user: User = {
    name: 'Nar',
    age: 32,
    skills: [ '1', '2'],
 }

//   **************** Interfaces

interface User {
    name: string,
    age: number,
    skills: string[]

    log: (id: number) => string;
}
interface Role {
    roleId: number
}
interface UserWithRole extends User, Role {
    crestedAt: Date;
}
type User2 = {
    name: string,
    age: number,
    skills: string[]

    log: (id: number) => string;
}
let user: UserWithRole = {
    name: 'Nar',
    age: 30,
    skills: ['1', '2'],
    roleId: 2,
    crestedAt: new Date(),
    log(id) {
        return ' ';
    },
}

interface UserDic {
    [index: number]: User
}
type UserDic2 = {
    [index: number]: User
}


//  Interfaces or Types


// interface User {
//     name: string
// }
// interface User {
//     age: number
// }
// const user: User = {
//     name: 'Nar',
//     age: 30
// }

//  **************** Optional

type User = {
    login: string,
    password?: string;
}
const user: User = {
    login: 'narim',
}

function multiply(first: number, second: number = first): number {
    if (!second) {
        return first * first;
    }
    return first * second
}
multiply(5)

interface UserPro {
    login: string,
    password?: {
        type: 'primary' | 'secondary'
    }
}

function testPass(user: UserPro) {
    const t = user.password?.type;
}

function test(param?: string) {
    const t = param ?? multiply(5)
}

// lesson 28 test 3

interface Ipayment {
    sum: number;
    from: number;
    to: number
}
enum PaymentStatus {
    SUCCESS = "success",
    FAILED = "failed"
}
interface IPaymentRequest extends Ipayment {
}
interface IDataSuccess extends Ipayment {
    databaseId: number;
}

interface IDataSuccess {
    dataBaseId: number;
    sum: number;
    from: number;
    to: number;
}
interface IDataFailed {
    errMessage: string;
    errorCode: number;
}
interface IResponseSuccess {
    status: PaymentStatus.SUCCESS;
    data: IDataSuccess
}
interface IResponseFailed {
    status: PaymentStatus.FAILED;
    data: IDataFailed;
}

//  **************** Void

function logId(id: string | number): void {
    console.log(id);
}

const a = logId(1);
function multiply(f: number, s?: number) {
    if (!s) {
        return f * f;
    }
    return f * s;
}

type voidFunction = () => void;

const f1: voidFunction = () => {

}
const f2: voidFunction = () => {
    return true;
}

const b = f2();
const skills = ['Dev', 'DevOps'];
const user = {
    s: ['s']
}

skills.forEach((e) => user.s.push(skill));

// Unknown
let input: unknown;
input = 3;
input = ['sf', 'second'];

function run(i: unknown) {
    if (typeof i == 'number') {
        i++;
    } else {
        i
    }
}
run(input)

async function getData() {
    try {
        await fetch('');
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
    }
}
async function getDataForce() {
    try {
        await fetch('');
    } catch (error) {
        const e = error as Error;
    }
}

type U1 = unknown | null;

type I1 = unknown & string;

//  **************** NEVER
function generateError(message: string): never {
    throw new Error(message);
}

function dumpError(): void {
    while (true) { }
}

type paymentAction = 'refund' | 'checkout' | 'reject'
function processAction(action: paymentAction) {
    switch (action) {
        case 'refund':
            //....
            break;
        case 'checkout':
            // ...
            break;
        default:
            throw new Error('dont find this action')
    }
}

function isString(x: string | number): boolean {
    if (typeof x === 'string') {
        return true
    } else if (typeof x === 'number') {
        return false
    }
    generateError('hello')
}

// ****************  NULL

const n: null = null;
const n1: any = null;
const n2: number = null;
const n3: string = null;
const n4: boolean = null;
const n5: undefined = null;

interface User {
    name: string;
}

function getUser() {
    if (Math.random() > 0.5) {
        return null;
    } else {
        return {
            name: 'Nar'
        } as User
    }
}

const user = getUser();
if (user) {
    const n555 = user.name;
}

// 33 Преобразование типов
let a = 5;
let b: string = a.toString();
let e = new String(a).valueOf()
let f = new Boolean(a).valueOf()

let c = 'str';
let d: number = parseInt(c);

interface User {
    name: string;
    email: string;
    login: string
}

const user: User = {
    name: 'Nar',
    email: 'nar@google.com',
    login: 'nar'
}

interface Admin {
    name: string;
    role: number;
}
const admin: Admin = {
    ...user,
    role: 1
}

function userToAdmin(user: User): Admin{
    return {
        name: user.name,
        role:1
    }
}

//  **************** Type Guard

interface User {
    name: string;
    email: string;
    login: string;
}

const user: User = {
    name: 'Nar',
    email: 'nar@google.com',
    login: 'nar',
}

interface Admin {
    name: string;
    role: number;
}

function logId(id: string | number) {
    if (isString(id)) {
        console.log(id);
    } else {
        console.log(id);
    }
}

function isString(x: string | number): x is string {
    return typeof x === 'string'
}

function isAdmin(user: User | Admin): user is Admin {
    return 'role' in user
}
function isAdminAlter(user: User | Admin): user is Admin {
    return (user as Admin).role !== undefined;
}
function setRoleZero(user: User | Admin) {
    if (isAdmin(user)) {
        user.role = 0
    } else {
        throw new Error('user is not an admin!')
    }
}
//  **************** typeguard exercises
interface Ipayment {
    sum: number;
    from: number;
    to: number
}
enum PaymentStatus {
    SUCCESS = "success",
    FAILED = "failed"
}
interface IPaymentRequest extends Ipayment {
}
interface IDataSuccess extends Ipayment {
    databaseId: number;
}

interface IDataSuccess {
    dataBaseId: number;
    sum: number;
    from: number;
    to: number;
}
interface IDataFailed {
    errMessage: string;
    errorCode: number;
}
interface IResponseSuccess {
    status: PaymentStatus.SUCCESS;
    data: IDataSuccess
}
interface IResponseFailed {
    status: PaymentStatus.FAILED;
    data: IDataFailed;
}

type f = (res: IResponseSuccess | IResponseFailed) => number;
type Res = IResponseSuccess | IResponseFailed;
function isSuccess (res: Res): res is IResponseSuccess {
    if(res.status === PaymentStatus.SUCCESS) {
        return true
    } else {
        return false
    }
}

function getIdFromData(res: Res): number{
    if(isSuccess(res)) {
        return res.data.dataBaseId;
    } else {
        throw new Error(res.data.errMessage)
    }
}

// ****************  Asserts
interface User {
    name: string;
}

const a = {};
assertUser(a);
a.name = 'Nar';

function assertUser(obj: unknown): asserts obj is User {
    if (typeof obj === 'object' && !!obj && 'name' in obj) {
        return;
    }
    throw new Error('it is not user')
}

// ****************** Классы

class User {
    name: string;

    constructor(name: string) {
        this.name = name
    }
}

const user = new User('Nar');
console.log(user);
user.name = 'Mir'
console.log(user);

class Admin {
    role!: number;
}

const admin = new Admin();
admin.role = 1;

//  **************** Конструктор

class User {
    name!: string;
    age!: number;
    constructor();
    constructor(name: string);
    constructor(age: number);
    constructor(name: string, age: number,);
    constructor(ageOrName?: string | number, age?: number) {
        if (typeof ageOrName === 'string') {
            this.name = ageOrName;
        } else if (typeof ageOrName === 'number') {
            this.age = ageOrName;
        }
        if (typeof age === 'number') {
            this.age = age;
        }
    }
}

const user = new User('Nar');
const user2 = new User();
const user3 = new User(33);
const user4 = new User('mir', 33);



//  **************** Methods

enum PaymentStatus {
    Holded,
    Processed,
    Reversed
}
class Payment {
    id!: number;
    status: PaymentStatus = PaymentStatus.Holded;
    createdAt: Date = new Date();
    updatedAt!: Date;

    constructor(id: number) {
        this.id = id;
        this.createdAt = new Date();
        this.status = PaymentStatus.Holded;
    }

    getPaymentLifeTime(): number {
        return new Date().getTime() - this.createdAt.getTime();
    }

    unholdPayment(): void {
        if (this.status == PaymentStatus.Processed) {
            throw new Error('Payment must not be return')
        }
        this.status = PaymentStatus.Reversed;
        this.updatedAt = new Date();
    }
}
const payment = new Payment(1);
payment.unholdPayment();
console.log(payment);
const time = payment.getPaymentLifeTime();
console.log(time);


//  ************* Перегрузка методов

class User {
    skills!: string[];

    addSkill(skill: string);
    addSkill(skills: string[]);
    addSkill(skillOrSkills: string | string[]): void {
        if (typeof skillOrSkills === 'string') {
            this.skills.push(skillOrSkills);
        } else {
            this.skills.concat(skillOrSkills);
        }
    };
}
function run(distance: string): string;
function run(distance: number): number;
function run(distance: number | string): number | string {
    if (typeof distance === 'number') {
        return 1
    } else {
        return ' '
    }
}

run()

*/
//  ************* Getter and Setter
class User {
    _login!: string;
    password!: string;

    set login(l: string | number) {
        this._login = 'user-' + l
    }
    get login() {
        return this._login;
    }
}
const user = new User();
user.login = 'myLogin';
console.log(user);
console.log(user.login);
