import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'balanceFilter'
})
export class BalanceFilterPipe implements PipeTransform {

  transform(students: any[], filter: string): any[] {
    if (filter === 'balance') {
      return students.filter(newStudent => newStudent.balance > 0);
    } else if (filter === 'no-balance') {
      return students.filter(newStudent => newStudent.balance === 0);
    } else {
      return students;
    }
  }

}
