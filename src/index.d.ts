/*
Типизируйте функцию getPersons, возвращающую массив объектов со следующими свойствами:
- name - строка
- age - число
- gender - 'male' или 'female'
 */
type TGender = 'male' | 'female';
export function getPersons(): Array<{
    name: string;
    age: number;
    gender: TGender;
}>;

/*
Типизируйте функцию personToString, возвращающую строку и принимающую объект одного из следующих форматов:
   1. Пользователь:
   - name - строка
   - age - число
   - gender - 'male' или 'female'
   2. Сотрудник
   - name - строка
   - age - число
   - gender - 'male' или 'female'
   - company- строка
 */
type TUser = { name: string; age: number; gender: TGender };
type TEmployee = TUser & { company: string };
export function personToString(person: TUser | TEmployee): string;
