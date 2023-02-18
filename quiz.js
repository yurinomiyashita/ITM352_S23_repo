//quiz for objects and array 

var classes_array = ['ITM352','BUS311','ACC101','FIN100','BUS310','MOM202']
console.log(classes_array[2]);
classes_array[2]='ITM353';
console.log(classes_array[2]);
classes_array.push('MKT300');
console.log(classes_array);

var student ={firstName:'Dan',lastName:'Kazman',major:'MIS',year:3,id:123456789,onProbation:true}
console.log(student.major);
student.onProbation=false;
console.log(student.onProbation);
student.clubMembership='ITMA';
console.log(student);

now_str = Date();
now_obj = new Date();

console.log(now_str,now_obj);
