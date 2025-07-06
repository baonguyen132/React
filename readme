# ReactJS&Vite
npm create vite@latest

npm install prop-types
npm install -D sass-embedded
npm install react-router-dom@6

# MongoDB
*-create database-*
use ```{nameDatabase}```
db.createCollection(```{nameCollectiom}```)

*-delete database-*
db.dropDatabase(```{nameDatabase}```)

*-insert collection-*
db.**student**.insertOne(**{"name":"A" , "age": 20 , "address": "A" , "dob": new Date("01/01/2019") , "gpa": 4}**)
db.**student**.insertMany(**[{"name":"B" , "age": 21 , "address": "B" , "dob": new Date("02/02/2019") , "gpa": 3},{"name":"C" , "age": 22 , "address": "C" , "dob": new Date("01/01/2020") , "gpa": 2}]**)

*- update colecttion -*

db.**colecttion**.updateOne({filter},{update})
db.**colecttion**.updateMany({filter},{update})
{update}
>   $set:   {}
>   $unset: {}

**db.student.updateOne({name: "A"} , {$set:{age: 18}})**



*-sort & limit-*

> 1: increase
> -1: decrease

db.**student**.find().sort({**name**:-1})

db.**student**.find().limit(1)

db.**student**.find().sort({**gpa**: 1}).limit(2)
db.**student**.find().sort(**{gpa**: -1}).limit(2)

*- find -*

db.**collection**.find(*{querry}* , *{projection}*)

**db.student.find({age: 20},{name: true , address: true , gpa: true})**

*- comparison operators -*

| MongoDB Operator | Ý nghĩa                         | Ví dụ                                                    |
| ---------------- | ------------------------------- | -------------------------------------------------------- |
| `$eq`            | Bằng (`=`)                      | `{ age: { $eq: 25 } }` → `age = 25`                      |
| `$ne`            | Không bằng (`!=`)               | `{ age: { $ne: 25 } }` → `age != 25`                     |
| `$gt`            | Lớn hơn (`>`)                   | `{ age: { $gt: 25 } }` → `age > 25`                      |
| `$gte`           | Lớn hơn hoặc bằng (`>=`)        | `{ age: { $gte: 25 } }` → `age >= 25`                    |
| `$lt`            | Nhỏ hơn (`<`)                   | `{ age: { $lt: 25 } }` → `age < 25`                      |
| `$lte`           | Nhỏ hơn hoặc bằng (`<=`)        | `{ age: { $lte: 25 } }` → `age <= 25`                    |
| `$in`            | Trong danh sách                 | `{ age: { $in: [20, 25, 30] } }` → `age IN (20, 25, 30)` |
| `$nin`           | Không nằm trong danh sách       | `{ age: { $nin: [20, 25, 30] } }` → `age NOT IN (...)`   |
| `$exists`        | Kiểm tra field có tồn tại không | `{ age: { $exists: true } }`                             |


*- logical operators -*

| MongoDB Operator | Ý nghĩa                      | Ví dụ                                                      |
| ---------------- | ---------------------------- | ---------------------------------------------------------- |
| `$and`           | Và (AND)                     | `{ $and: [ { age: { $gt: 20 } }, { status: "active" } ] }` |
| `$or`            | Hoặc (OR)                    | `{ $or: [ { age: { $lt: 18 } }, { age: { $gt: 60 } } ] }`  |
| `$nor`           | Không cái nào đúng (NOT OR)  | `{ $nor: [ { status: "active" }, { age: { $lt: 18 } } ] }` |
| `$not`           | Phủ định điều kiện bên trong | `{ age: { $not: { $gt: 20 } } }` (→ `age <= 20`)           |

db.users.find(**{$and: [{ age: { $gt: 20, $lt: 20} },{ status: "active" }]}**);
